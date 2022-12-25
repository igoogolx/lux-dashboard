import React, { useCallback, useEffect, useState } from "react";
import { shellOpenExternal } from "@/electronContext";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { LATEST_RELEASE_URL, REPOSITORY_URL } from "@/utils/constants";
import {
  Button,
  ButtonTypeEnum,
  ConfirmModal,
  notifier,
} from "@/components/Core";
import checkForUpdate from "@/utils/checkForUpdate";
import { getVersion } from "@/utils/version";
import { getVersion as getCoreVersion } from "lux-js-sdk";
import styles from "./index.module.css";

export default function About(): JSX.Element {
  const { t } = useTranslation();
  const version = getVersion();
  const [coreVersion, setCoreVersion] = useState("");
  const [hasLatestVersion, setHasLatestVersion] = useState(false);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);

  useEffect(() => {
    getCoreVersion().then((data) => {
      setCoreVersion(data.version);
    });
  }, []);

  const onCheckForUpdate = useCallback(async () => {
    try {
      setIsCheckingUpdate(true);
      const checkedResult = await checkForUpdate();
      if (!checkedResult) {
        notifier.info(t(TRANSLATION_KEY.NO_UPDATE_INFO));
      }
      setHasLatestVersion(checkedResult);
    } finally {
      setIsCheckingUpdate(false);
    }
  }, [t]);
  return (
    <div className={styles.container}>
      {hasLatestVersion && (
        <ConfirmModal
          title={t(TRANSLATION_KEY.CONFIRM)}
          content={t(TRANSLATION_KEY.NEW_VERSION_INFO)}
          onCancel={() => {
            setHasLatestVersion(false);
          }}
          confirmText={t(TRANSLATION_KEY.GO)}
          onConfirm={() => {
            shellOpenExternal(LATEST_RELEASE_URL);
          }}
        />
      )}
      <div className={styles.title}>Lux</div>
      <div className={styles.desc}>
        <div>
          {t(TRANSLATION_KEY.VERSION)}: {version}
          <Button
            onClick={onCheckForUpdate}
            disabled={isCheckingUpdate}
            className={styles.checkUpdatesBth}
            buttonType={ButtonTypeEnum.Primary}
          >
            {t(TRANSLATION_KEY.CHECK_UPDATE)}
          </Button>
        </div>
        <div
          onClick={() => {
            shellOpenExternal(REPOSITORY_URL);
          }}
          className={styles.link}
        >
          {t(TRANSLATION_KEY.CORE_VERSION)}: {coreVersion}
        </div>
        <div
          onClick={() => {
            shellOpenExternal(REPOSITORY_URL);
          }}
          className={styles.link}
        >
          {t(TRANSLATION_KEY.REPOSITORY)}: {REPOSITORY_URL}
        </div>
      </div>
    </div>
  );
}
