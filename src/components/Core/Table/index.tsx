import classNames from "classnames";
import { FixedSizeList } from "react-window";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Column,
  useFlexLayout,
  useResizeColumns,
  useSortBy,
  useTable,
} from "react-table";
import { getScrollbarWidth } from "@/components/Core/Table/scrollbarWidth";
import { IconNameEnum, Icon } from "../Icon";
import styles from "./index.module.css";

type TableProps<T> = {
  columns: Column[];
  data: T[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

const initialState = {};

export function Table<T extends object>(props: TableProps<T>): JSX.Element {
  const { columns, data, selectedId = "", onSelect } = props;

  const scrollBarSize = React.useMemo(() => getScrollbarWidth(), []);

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 70, // minWidth is only used as a limit for resizing
      width: 100, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    totalColumnsWidth,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetSortBy: false,
      initialState,
    },
    useSortBy,
    useResizeColumns,
    useFlexLayout
  );
  const RenderRow = React.useCallback(
    ({ index, style }:{index:number,style:Record<string, any>}) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style,
          })}
          className={classNames(styles.tr, {
            [styles.activeTr]:
              selectedId && selectedId === (row.original as { id: string }).id,
          })}
          onClick={() => {
            onSelect?.((row.original as { id: string }).id);
          }}
        >
          {row.cells.map((cell) => {
            return (
              <div {...cell.getCellProps()} className={styles.cell}>
                {cell.render("Cell")}
              </div>
            );
          })}
        </div>
      );
    },
    [onSelect, prepareRow, rows, selectedId]
  );

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const syncScroll = useCallback(() => {
    if (headerRef.current && bodyRef.current) {
      headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }
  }, []);

  useEffect(() => {
    const listEle = bodyRef.current;
    listEle?.addEventListener("scroll", syncScroll);
    return () => {
      listEle?.removeEventListener("scroll", syncScroll);
    };
  }, [syncScroll]);

  return (
    <div {...getTableProps()} className={styles.table}>
      <div className={styles.thead} ref={headerRef}>
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
            {headerGroup.headers.map((column) => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={classNames(styles.th, {
                  [styles.thSortable]: column.canSort,
                })}
              >
                <div className={styles.thContent}>
                  {column.render("Header")}
                </div>
                {column.isSorted && (
                  <Icon
                    name={
                      column.isSortedDesc ? IconNameEnum.Down : IconNameEnum.Up
                    }
                    className={styles.icon}
                  />
                )}
                <div
                  className={styles.resizerContainer}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    {...column.getResizerProps()}
                    className={classNames(styles.resizer)}
                  >
                    <div className={styles.line} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className={styles.tbody} ref={bodyRef}>
        <FixedSizeList
          height={400}
          itemCount={rows.length}
          itemSize={36}
          width={totalColumnsWidth + scrollBarSize}
          itemData={rows}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  );
}
