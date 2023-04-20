import {
  getTheme,
  setTheme,
  ThemeContext,
  ThemeContextType,
  ThemeEnum,
} from "@/utils/theme";
import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { WeatherMoonRegular, WeatherSunnyRegular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import styles from "./index.module.css";

export default function ThemeSwitch(): JSX.Element {
  const { theme: currentTheme, setTheme: setCurrentTheme } = useContext(
    ThemeContext
  ) as ThemeContextType;

  useEffect(() => {
    const theme = getTheme();
    setCurrentTheme(theme);
    setTheme(theme);
  }, [setCurrentTheme]);

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
    <Button onClick={onClick} className={styles.container}>
      <div
        className={classNames(styles.item, {
          [styles.selected]: currentTheme === ThemeEnum.Light,
        })}
      >
        <WeatherSunnyRegular />
      </div>
      <div
        className={classNames(styles.item, {
          [styles.selected]: currentTheme === ThemeEnum.Dark,
        })}
      >
        <WeatherMoonRegular />
      </div>
    </Button>
  );
}
