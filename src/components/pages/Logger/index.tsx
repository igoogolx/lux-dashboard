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
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import styles from "./index.module.css";

enum SearchSelectorItemsEnum {
  Type,
  Content,
}

function TypeCell(props: CellContext<Log, string>) {
  const { getValue } = props;
  const value = getValue();
  return <Tag type={value as TagTypeEnum} value={value} />;
}

function PayloadCell(props: CellContext<Log, string>) {
  const { getValue } = props;
  const value = getValue();
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

  const columns = useMemo<ColumnDef<Log, string>[]>(() => {
    return [
      {
        header: t(TRANSLATION_KEY.TYPE) || "",
        accessorKey: "type",
        cell: TypeCell,
        size: 100,
        maxSize: 100,
      },
      {
        header: t(TRANSLATION_KEY.CONTENT) || "",
        accessorKey: "payload",
        cell: PayloadCell,
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
