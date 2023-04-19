import * as React from "react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  DataUsageRegular,
  HomeRegular,
  InfoRegular,
  NoteRegular,
  SettingsRegular,
  TopSpeedRegular,
} from "@fluentui/react-icons";
import styles from "./index.module.css";

export function Nav(): JSX.Element {
  const { t } = useTranslation();
  const items = useMemo(() => {
    return [
      { to: "/", icon: <HomeRegular />, name: t(TRANSLATION_KEY.NAV_HOME) },
      {
        to: "/dashboard",
        icon: <TopSpeedRegular />,
        name: t(TRANSLATION_KEY.NAV_DATA),
      },
      {
        to: "/connections",
        icon: <DataUsageRegular />,
        name: t(TRANSLATION_KEY.NAV_CONNECTION),
      },
      {
        to: "/logs",
        icon: <NoteRegular />,
        name: t(TRANSLATION_KEY.LOG),
      },
      {
        to: "/setting",
        icon: <SettingsRegular />,
        name: t(TRANSLATION_KEY.NAV_SETTING),
      },
      {
        to: "/about",
        icon: <InfoRegular />,
        name: t(TRANSLATION_KEY.NAV_ABOUT),
      },
    ];
  }, [t]);
  return (
    <div className={styles.wrapper}>
      {items.map((item) => {
        return (
          <NavLink
            to={item.to}
            className={({ isActive }) => {
              return classNames(styles.navItem, {
                [styles.activeNavItem]: isActive,
              });
            }}
            end
            key={item.to}
          >
            {item.icon}
            <span className={styles.text}>{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
