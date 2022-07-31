import React from "react";
import classNames from "classnames";
import { IconNameEnum, Icon, IconSizeEnum } from "@/components/Core/Icon";
import { Button } from "@/components/Core/Button";
import styles from "./index.module.css";

export enum MessageTypeEnum {
  Error = "error",
  Success = "success",
  Warning = "warning",
  Info = "info",
}

export type MessageType = MessageTypeEnum;

type MessageProps = {
  title: string;
  className?: string;
  type?: MessageTypeEnum;
  close: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const ICON_MAP = {
  [MessageTypeEnum.Info]: IconNameEnum.InfoCircle,
  [MessageTypeEnum.Error]: IconNameEnum.CloseCircle,
  [MessageTypeEnum.Success]: IconNameEnum.CheckCircle,
  [MessageTypeEnum.Warning]: IconNameEnum.WarningCircle,
};

export const Message = React.memo((props: MessageProps) => {
  const {
    title,
    type = MessageTypeEnum.Info,
    close,
    className,
    ...restProps
  } = props;

  const iconCls = classNames(styles.icon, styles[type]);
  const iconName = ICON_MAP[type];

  const cls = classNames(styles.message, className);

  return (
    <div className={cls} {...restProps}>
      {iconName && (
        <div className={styles.iconContainer}>
          <Icon
            className={iconCls}
            name={iconName}
            size={IconSizeEnum.Normal}
          />
        </div>
      )}
      <div className={styles.popup}>{title}</div>
      <Button className={styles.close} onClick={close}>
        <Icon name={IconNameEnum.Close} />
      </Button>
    </div>
  );
});
