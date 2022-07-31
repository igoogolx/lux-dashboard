import { Button, ButtonTypeEnum, Icon, IconNameEnum } from "@/components/Core";
import React from "react";
import { closeWindow, minimizeWindow } from "@/electronContext";
import classNames from "classnames";
import styles from "./index.module.css";

export default function TitleBar() {
  return (
    <div className={styles.container}>
      <Icon name={IconNameEnum.Logo} />
      <div className={styles.bar}>
        <Button
          onClick={minimizeWindow}
          buttonType={ButtonTypeEnum.Blank}
          className={styles.btn}
        >
          <div className={styles.minimize} />
        </Button>
        <Button
          buttonType={ButtonTypeEnum.Blank}
          className={styles.btn}
          disabled
        >
          <div className={styles.maximize} />
        </Button>
        <Button
          onClick={closeWindow}
          buttonType={ButtonTypeEnum.Blank}
          className={classNames(styles.close, styles.btn)}
        >
          <Icon name={IconNameEnum.Close} className={styles.closeIcon} />
        </Button>
      </div>
    </div>
  );
}
