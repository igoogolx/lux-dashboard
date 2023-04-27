import React, { useMemo, useState } from "react";
import { getLogsDir, Log } from "lux-js-sdk";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import {
  notifier,
  PlacementEnum,
  SelectorProps,
  Table,
  Tag,
  TagTypeEnum,
  Tooltip,
} from "@/components/Core";
import { isElectron, shellOpenPath } from "@/clientContext";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { TableColumnDefinition } from "@fluentui/react-table";
import {
  createTableColumn,
  Input,
  TableCellLayout,
  Option,
  Dropdown,
  Button,
} from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import styles from "./index.module.css";

enum SearchSelectorItemsEnum {
  Type = "0",
  Content = "1",
}

const SearchSelectorTranslationMap = {
  [SearchSelectorItemsEnum.Type]: TRANSLATION_KEY.TYPE,
  [SearchSelectorItemsEnum.Content]: TRANSLATION_KEY.CONTENT,
};

function TimeCell(props: { value: number }) {
  const { value } = props;
  const date = new Date(value);
  return <div>{date.toLocaleTimeString()}</div>;
}

function TypeCell(props: { value: string }) {
  const { value } = props;
  return <Tag type={value as TagTypeEnum} value={value} />;
}

function PayloadCell(props: { value: string }) {
  const { value } = props;
  return (
    <Tooltip content={value} placement={PlacementEnum.TopStart}>
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

  const columns = useMemo<TableColumnDefinition<Log>[]>(() => {
    return [
      createTableColumn<Log>({
        columnId: "type",
        renderHeaderCell: () => {
          return t(TRANSLATION_KEY.TYPE);
        },
        renderCell: (item) => {
          return (
            <TableCellLayout>
              <TypeCell value={item.type} />
            </TableCellLayout>
          );
        },
      }),
      createTableColumn<Log>({
        columnId: "time",
        renderHeaderCell: () => {
          return t(TRANSLATION_KEY.TIME);
        },
        renderCell: (item) => {
          return (
            <TableCellLayout>
              <TimeCell value={item.time} />
            </TableCellLayout>
          );
        },
      }),
      createTableColumn<Log>({
        columnId: "content",
        renderHeaderCell: () => {
          return t(TRANSLATION_KEY.CONTENT);
        },
        renderCell: (item) => {
          return (
            <TableCellLayout>
              <PayloadCell value={item.payload} />
            </TableCellLayout>
          );
        },
      }),
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
        <Dropdown
          value={t(
            SearchSelectorTranslationMap[
              searchedSelectorValue as SearchSelectorItemsEnum
            ]
          )}
          onOptionSelect={(e, changedData) => {
            setSearchedSelectorValue(
              changedData.optionValue as SearchSelectorItemsEnum
            );
          }}
        >
          {searchSelectorItems.map((item) => (
            <Option key={item.id} value={item.id.toString()}>
              {item.content as string}
            </Option>
          ))}
        </Dropdown>
        <Input
          onChange={(e) => {
            setSearchedValue(e.target.value);
          }}
          contentAfter={<SearchRegular />}
        />
        <Button onClick={onOpenLogDir} className={styles.logBtn}>
          {t(TRANSLATION_KEY.OPEN_LOG_DIR)}
        </Button>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
