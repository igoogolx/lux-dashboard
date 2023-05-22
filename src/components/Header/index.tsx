import React from "react";
import { Button, Title2 } from "@fluentui/react-components";
import { NavigationFilled } from "@fluentui/react-icons";
import { useLocation } from "react-router-dom";
import { ROUTER_NAME, ROUTER_PATH } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";

type HeaderProps = {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
};

export function Header(props: HeaderProps) {
  const { setIsNavOpen, isNavOpen } = props;
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Title2>{t(ROUTER_NAME[location.pathname as ROUTER_PATH])}</Title2>
      <div className={styles.navigationBtn}>
        <Button
          icon={<NavigationFilled />}
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        />
      </div>
    </div>
  );
}
