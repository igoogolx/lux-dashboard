import * as React from "react";
import { useEffect } from "react";
import {
  getProxies,
  Proxy,
  SettingRes,
  updateSelectedProxyId,
} from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { proxiesSelectors, proxiesSlice, RootState } from "@/reducers";
import { selectedSlice } from "@/reducers/selected";
import {
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridProps,
  DataGridRow,
  TableCellLayout,
  TableColumnDefinition,
} from "@fluentui/react-components";
import { Operation } from "@/components/pages/Home/Content/ProxyCard/Operation";
import { DelayTag } from "@/components/pages/Home/Content/ProxyCard/DelayTag";
import styles from "./index.module.css";

export function Content(): JSX.Element {
  const proxies = useSelector(proxiesSelectors.selectAll);
  const selectedId = useSelector<RootState, string>(
    (state) => state.selected.proxy
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getProxies().then((data) => {
      dispatch(proxiesSlice.actions.received(data));
      dispatch(selectedSlice.actions.setProxy({ id: data.selectedId }));
    });
  }, [dispatch]);

  const columns: TableColumnDefinition<Proxy>[] = [
    createTableColumn<Proxy>({
      columnId: "name",
      renderHeaderCell: () => {
        return "Name";
      },
      renderCell: (item) => {
        return <TableCellLayout truncate>{item.name}</TableCellLayout>;
      },
    }),
    createTableColumn<Proxy>({
      columnId: "server",
      renderHeaderCell: () => {
        return "Server";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout
            truncate
          >{`${item.server}:${item.port}`}</TableCellLayout>
        );
      },
    }),
    createTableColumn<Proxy>({
      columnId: "type",
      renderHeaderCell: () => {
        return "Type";
      },
      renderCell: (item) => {
        return <TableCellLayout truncate>{item.type}</TableCellLayout>;
      },
    }),
    createTableColumn<Proxy>({
      columnId: "delay",
      renderHeaderCell: () => {
        return "Delay";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout truncate>
            <DelayTag id={item.id} value={item.delay} />
          </TableCellLayout>
        );
      },
    }),
    createTableColumn<Proxy>({
      columnId: "action",
      renderHeaderCell: () => {
        return "Action";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout truncate>
            <Operation proxy={item} />
          </TableCellLayout>
        );
      },
    }),
  ];

  const defaultSelectedItems = React.useMemo(
    () => new Set([selectedId]),
    [selectedId]
  );

  // TODO:optimize selector
  const setting = useSelector<RootState, SettingRes>((state) => state.setting);

  const isAutoMode = setting.outbound.mode === "auto";

  const handleSelect: DataGridProps["onSelectionChange"] = async (e, data) => {
    if (!isAutoMode) {
      const id = data.selectedItems.values().next().value;
      await updateSelectedProxyId({ id });
      dispatch(selectedSlice.actions.setProxy({ id }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <DataGrid
        items={proxies}
        columns={columns}
        selectionMode="single"
        selectedItems={defaultSelectedItems}
        onSelectionChange={handleSelect}
        getRowId={(item) => item.id}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Proxy>>
          {({ item, rowId }) => (
            <DataGridRow<Proxy>
              key={rowId}
              selectionCell={
                !isAutoMode ? { "aria-label": "Select row" } : undefined
              }
            >
              {({ renderCell }) => (
                <DataGridCell>{renderCell(item)}</DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
}
