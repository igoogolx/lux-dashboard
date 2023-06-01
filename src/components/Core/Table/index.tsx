import React from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableColumnSizingOptions,
  useFluent,
  useScrollbarWidth,
} from "@fluentui/react-components";
import { TableColumnDefinition } from "@fluentui/react-table";
import styles from "./index.module.css";

type TableProps<T> = {
  columns: TableColumnDefinition<T>[];
  data: T[];
  columnSizingOptions?: TableColumnSizingOptions;
  resizableColumns?: boolean;
};

export function Table<T extends { id: string }>(props: TableProps<T>) {
  const { columns, data, columnSizingOptions, resizableColumns } = props;

  const { targetDocument } = useFluent();
  const scrollbarWidth = useScrollbarWidth({ targetDocument });

  return (
    <DataGrid
      items={data}
      columns={columns}
      className={styles.container}
      columnSizingOptions={columnSizingOptions}
      resizableColumns={resizableColumns}
    >
      <DataGridHeader style={{ paddingRight: scrollbarWidth }}>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<T>>
        {({ item, rowId }, style) => (
          <DataGridRow<T> key={rowId} style={style as React.CSSProperties}>
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}
