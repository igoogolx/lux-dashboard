import * as React from "react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import styles from "./index.module.css";
import { IconNameEnum, Icon } from "../Core";

export function Nav(): JSX.Element {
  const { t } = useTranslation();
  const items = useMemo(() => {
    return [
      { to: "/", icon: IconNameEnum.Home, name: t(TRANSLATION_KEY.NAV_HOME) },
      {
        to: "/dashboard",
        icon: IconNameEnum.Dashboard,
        name: t(TRANSLATION_KEY.NAV_DASHBOARD),
      },
      {
        to: "/connections",
        icon: IconNameEnum.Monitor,
        name: t(TRANSLATION_KEY.NAV_CONNECTION),
      },
      {
        to: "/logs",
        icon: IconNameEnum.Note,
        name: t(TRANSLATION_KEY.LOG),
      },
      {
        to: "/setting",
        icon: IconNameEnum.Setting,
        name: t(TRANSLATION_KEY.NAV_SETTING),
      },
      {
        to: "/about",
        icon: IconNameEnum.InfoCircle,
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
            <Icon name={item.icon} />
            <span className={styles.text}>{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
