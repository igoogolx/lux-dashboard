import * as React from "react";
import { useState } from "react";
import { Menu, MenuItemProps, MenuProps } from "../Menu";
import { PlacementEnum, TriggerEnum, Popover } from "../Popover";
import styles from "./index.module.css";
import { useLockBodyScroll } from "@/hooks";

type DropdownProps = {
  children: React.ReactNode;
  items: MenuItemProps[];
  onItemClick: MenuProps["onClick"];
  isVirtualized?: boolean;
  className?: string;
  withState?: boolean;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  disabled?: boolean;
};

export function Dropdown(props: DropdownProps): JSX.Element {
  const {
    children,
    className,
    items,
    onItemClick,
    isVirtualized,
    withState = true,
    isOpen: selfIsOpen,
    setIsOpen: selfSetIsOpen,
    disabled = false,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const computedIsOpen = withState ? isOpen : selfIsOpen;
  const computedSetIsOpen = withState ? setIsOpen : selfSetIsOpen;
  const handleOnClick: MenuProps["onClick"] = (id) => {
    if (computedSetIsOpen) {
      computedSetIsOpen(false);
    }
    onItemClick(id);
  };
  useLockBodyScroll();
  return disabled ? (
    <div className={className}>{children}</div>
  ) : (
    <Popover
      content={
        <Menu
          items={items}
          isVirtualized={isVirtualized}
          onClick={handleOnClick}
          className={styles.menu}
        />
      }
      trigger={TriggerEnum.Click}
      placement={PlacementEnum.BottomStart}
      withState={false}
      isOpen={computedIsOpen}
      setIsOpen={computedSetIsOpen}
      className={className}
    >
      {children}
    </Popover>
  );
}
