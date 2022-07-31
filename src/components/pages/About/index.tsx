import React from "react";
import { getVersion, shellOpenExternal } from "@/electronContext";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import styles from "./index.module.css";

const repositoryUrl = "https://github.com/igoogolx/lux";

export function About(): JSX.Element {
  const { t } = useTranslation();
  const version = getVersion();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Lux</div>
      <div className={styles.desc}>
        <div>
          {t(TRANSLATION_KEY.VERSION)}: {version}
        </div>
        <div
          onClick={() => {
            shellOpenExternal(repositoryUrl);
          }}
          className={styles.link}
        >
          {t(TRANSLATION_KEY.REPOSITORY)}: {repositoryUrl}
        </div>
      </div>
    </div>
  );
}
