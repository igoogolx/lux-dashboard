import React from "react";
import DefaultInterface from "@/components/pages/Setting/DefaultInterface";
import TrueProxyServer from "@/components/pages/Setting/TrueProxyServer";
import AutoMode from "@/components/pages/Setting/AutoMode";
import LocalHttpServer from "@/components/pages/Setting/LocalHttpServer";
import styles from "./index.module.css";

export function SettingForm() {
  return (
    <div className={styles.form}>
      <>
        <div className={styles.fields}>
          <DefaultInterface />
          <TrueProxyServer />
          <LocalHttpServer />
          <AutoMode />
        </div>
      </>
    </div>
  );
}
