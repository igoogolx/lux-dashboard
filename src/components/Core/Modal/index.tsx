import React, { useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import styles from "./index.module.css";
import { Button, ButtonTypeEnum } from "../Button";
import { Icon, IconNameEnum } from "../Icon";
import { useLockBodyScroll } from "@/hooks";

export enum ModalSizeEnum {
  Small = "sizeS",
  Medium = "sizeM",
  Large = "sizeL",
}

type ModalProps = {
  children: React.ReactNode;
  close?: () => void;
  size?: ModalSizeEnum;
  closeWhenClickOutside?: boolean;
};

export const Modal = React.memo((props: ModalProps) => {
  const {
    close,
    children,
    size = ModalSizeEnum.Large,
    closeWhenClickOutside = false,
  } = props;

  const handlerClose = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeWhenClickOutside) {
        if (e.target === e.currentTarget && close) close();
      }
    },
    [close, closeWhenClickOutside]
  );

  const cls = classNames(styles.container);
  // https://usehooks.com/useLockBodyScroll/
  useLockBodyScroll();
  return createPortal(
    <div>
      <div className={styles.mask} />
      <div className={cls} onClick={handlerClose}>
        <div className={styles.content}>
          {close && (
            <Button
              className={styles.close}
              onClick={close}
              buttonType={ButtonTypeEnum.Blank}
            >
              <Icon name={IconNameEnum.Close} />
            </Button>
          )}
          <div className={classNames(styles.panel, styles[size])}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
});
