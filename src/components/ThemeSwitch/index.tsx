import { getTheme, setTheme, ThemeEnum } from "@/utils/theme";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { WeatherMoonRegular, WeatherSunnyRegular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
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
