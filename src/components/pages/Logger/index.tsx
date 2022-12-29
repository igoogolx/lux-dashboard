import React, { useMemo, useState } from "react";
import { getLogsDir, Log } from "lux-js-sdk";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import {
  Button,
  InputGroup,
  notifier,
  SelectorProps,
  Table,
  Tag,
  TagTypeEnum,
  Tooltip,
} from "@/components/Core";
import { isElectron, shellOpenPath } from "@/clientContext";
import { Column } from "react-table";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import styles from "./index.module.css";

enum SearchSelectorItemsEnum {
  Type,
  Content,
}

function TypeCell({ value }: { value: string }) {
  return <Tag type={value as TagTypeEnum} value={value} />;
}

function PayloadCell({ value }: { value: string }) {
  return (
    <Tooltip content={value}>
      <div className={styles.payload}>{value}</div>
    </Tooltip>
  );
}

export default function Logger(): JSX.Element {
  const { t } = useTranslation();
  const logs = useSelector<RootState, Log[]>((state) => state.logger.logs);
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedSelectorValue, setSearchedSelectorValue] = useState(
    SearchSelectorItemsEnum.Content
  );
  const onOpenLogDir = async () => {
    const logDir = await getLogsDir();
    if (isElectron) {
      await shellOpenPath(logDir);
    } else {
      await navigator.clipboard.writeText(logDir);
      notifier.success(t(TRANSLATION_KEY.COPY_LOG_DIR_PATH));
    }
  };

  const columns = useMemo<
    (Column & { accessor: keyof typeof data[number] })[]
  >(() => {
    return [
      {
        Header: t(TRANSLATION_KEY.TYPE) || "",
        accessor: "type",
        minWidth: 80,
        Cell: TypeCell,
      },
      {
        Header: t(TRANSLATION_KEY.CONTENT) || "",
        accessor: "payload",
        minWidth: 494,
        width: 496,
        maxWidth: 496,
        Cell: PayloadCell,
      },
    ];
  }, [t]);
  const searchSelectorItems: SelectorProps["items"] = [
    {
      id: SearchSelectorItemsEnum.Type,
      content: t(TRANSLATION_KEY.TYPE),
    },
    {
      id: SearchSelectorItemsEnum.Content,
      content: t(TRANSLATION_KEY.CONTENT),
    },
  ];

  const data = useMemo(() => {
    return logs.filter((log) => {
      if (searchedValue) {
        switch (searchedSelectorValue) {
          case SearchSelectorItemsEnum.Type:
            return log.type
              .toLocaleLowerCase()
              .includes(searchedValue.toLocaleLowerCase());
          case SearchSelectorItemsEnum.Content:
            return log.payload
              .toLocaleLowerCase()
              .includes(searchedValue.toLocaleLowerCase());
          default: {
            throw new Error(`invalid ${searchedSelectorValue}`);
          }
        }
      }
      return true;
    });
  }, [logs, searchedSelectorValue, searchedValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <InputGroup
          selectorItems={searchSelectorItems}
          selectorValue={searchedSelectorValue}
          inputValue={searchedValue}
          onSelectorChange={
            setSearchedSelectorValue as SelectorProps["onChange"]
          }
          onInputChange={(e) => {
            setSearchedValue(e.target.value);
          }}
        />
        <Button onClick={onOpenLogDir} className={styles.logBtn}>
          {t(TRANSLATION_KEY.OPEN_LOG_DIR)}
        </Button>
      </div>
      <div className={styles.table}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
