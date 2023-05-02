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
import {
  makeStyles,
  mergeClasses,
  shorthands,
  Text,
} from "@fluentui/react-components";
import { tokens } from "@fluentui/react-theme";
import styles from "./index.module.css";

const useStyles = makeStyles({
  nav: {
    ...shorthands.borderColor(tokens.colorPaletteSteelBorderActive),
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Selected,
    },
  },
  activeNav: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
  },
});

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

  const inStyles = useStyles();

  return (
    <div className={styles.wrapper}>
      {items.map((item) => {
        return (
          <NavLink
            to={item.to}
            className={({ isActive }) => {
              return mergeClasses(
                inStyles.nav,
                classNames(styles.navItem, {
                  [styles.activeNavItem]: isActive,
                  [inStyles.activeNav]: isActive,
                })
              );
            }}
            end
            key={item.to}
          >
            {({ isActive }) => {
              return (
                <>
                  {item.icon}
                  <Text
                    className={styles.text}
                    weight={isActive ? "bold" : "regular"}
                  >
                    {item.name}
                  </Text>
                </>
              );
            }}
          </NavLink>
        );
      })}
    </div>
  );
}
