import React from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  useFluent,
  useScrollbarWidth,
} from "@fluentui/react-components";
import { TableColumnDefinition } from "@fluentui/react-table";
import styles from "./index.module.css";

type TableProps<T> = {
  columns: TableColumnDefinition<T>[];
  data: T[];
};

export function Table<T extends { id: string }>(props: TableProps<T>) {
  const { columns, data } = props;

  const { targetDocument } = useFluent();
  const scrollbarWidth = useScrollbarWidth({ targetDocument });

  return (
    <DataGrid
      items={data}
      columns={columns}
      focusMode="cell"
      sortable
      className={styles.container}
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
