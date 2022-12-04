import {
  Button,
  ButtonTypeEnum,
  Icon,
  IconNameEnum,
  IconSizeEnum,
} from "@/components/Core";
import { getTheme, setTheme, ThemeEnum } from "@/utils/theme";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

export default function ThemeSwitch(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.Light);

  useEffect(() => {
    const theme = getTheme();
    setCurrentTheme(theme);
    setTheme(theme);
  }, []);

  const onClick = () => {
    if (currentTheme === ThemeEnum.Light) {
      setCurrentTheme(ThemeEnum.Dark);
      setTheme(ThemeEnum.Dark);
    } else {
      setTheme(ThemeEnum.Light);
      setCurrentTheme(ThemeEnum.Light);
    }
  };

  return (
    <Button
      onClick={onClick}
      buttonType={ButtonTypeEnum.Blank}
      className={styles.container}
    >
      <div
        className={classNames(styles.item, {
          [styles.selected]: currentTheme === ThemeEnum.Light,
        })}
      >
        <Icon name={IconNameEnum.Sun} size={IconSizeEnum.Small} />
      </div>
      <div
        className={classNames(styles.item, {
          [styles.selected]: currentTheme === ThemeEnum.Dark,
        })}
      >
        <Icon name={IconNameEnum.Moon} size={IconSizeEnum.Small} />
      </div>
    </Button>
  );
}
