import * as React from "react";
import { MouseEventHandler, useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { Tooltip } from "@/components/Core/Tooltip";
import { PlacementEnum } from "../Popover";
import { MenuItemProps, MenuProps } from "../Menu";
import { Button, ButtonTypeEnum } from "../Button";
import { Icon, IconNameEnum } from "../Icon";
import styles from "./index.module.css";
import { Dropdown } from "../Dropdown";

const DEFAULT_TOOLTIP_TIMEOUT = 1000;

export type SelectorProps = {
  value: React.ReactNode;
  className?: string;
  items: MenuItemProps[];
  isVirtualized?: boolean;
  onChange: (key: string | number) => void;
  disabled?: boolean;
  clearable?: boolean;
};

export function Selector(props: SelectorProps): JSX.Element {
  const {
    value,
    className,
    onChange,
    items,
    isVirtualized,
    disabled = false,
    clearable = false,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onMenuItemClick = useCallback<MenuProps["onClick"]>(
    (key) => {
      onChange(key);
    },
    [onChange]
  );

  const selectedItem = useMemo(() => {
    return items.find((i) => i.id === value);
  }, [items, value]);

  const onReset = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (value) {
        onChange("");
      }
    },
    [onChange, value]
  );

  return (
    <Dropdown
      items={items}
      isVirtualized={isVirtualized}
      onItemClick={onMenuItemClick}
      withState={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      disabled={disabled}
    >
      <Tooltip
        content={selectedItem?.content}
        timeout={DEFAULT_TOOLTIP_TIMEOUT}
        placement={PlacementEnum.Bottom}
        className={styles.tooltip}
      >
        <Button
          buttonType={ButtonTypeEnum.Secondary}
          className={classNames(styles.button, className)}
          disabled={disabled}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <span className={styles.text}>{selectedItem?.content}</span>
          {isHover && clearable && value ? (
            <Button buttonType={ButtonTypeEnum.Blank} onClick={onReset}>
              <Icon name={IconNameEnum.Close} />
            </Button>
          ) : (
            <Icon name={isOpen ? IconNameEnum.Up : IconNameEnum.Down} />
          )}
        </Button>
      </Tooltip>
    </Dropdown>
  );
}
