import React, { useEffect, useState } from "react";
import styles from "@/components/pages/Setting/index.module.css";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { Button, Caption1, Card, Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { getConfigFileDir } from "lux-js-sdk";
import { shellOpenPath } from "@/clientContext";

export default function ConfigFile() {
  const { t } = useTranslation();

  const [fileDir, setFileDir] = useState("");

  useEffect(() => {
    getConfigFileDir().then((path) => {
      setFileDir(path);
    });
  }, []);

  return (
    <Card className={styles.card}>
      <div className={styles.cardItem}>
        <div className={styles.desc}>
          <Subtitle2>{t(TRANSLATION_KEY.CONFIG_FILE)}</Subtitle2>
          <Caption1>{t(TRANSLATION_KEY.CONFIG_FILE_TIP)}</Caption1>
        </div>
        <Button
          onClick={() => {
            shellOpenPath(fileDir);
          }}
        >
          {t(TRANSLATION_KEY.OPEN_DIR)}
        </Button>
      </div>
    </Card>
  );
}
