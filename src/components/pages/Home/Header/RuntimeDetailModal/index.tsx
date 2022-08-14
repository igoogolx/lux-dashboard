import React, { useEffect, useState } from "react";
import { Modal } from "@/components/Core";
import { getRuntimeDetail, RuntimeDetail } from "lux-js-sdk";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTranslation } from "react-i18next";
import getHubPort from "@/utils/getHubPort";
import styles from "./index.module.css";

type RuntimeDetailModalProps = {
  close: () => void;
};

const TRANSLATION_KEY_MAP = {
  directedInterfaceName: TRANSLATION_KEY.COMMON_DEFAULT_INTERFACE_NAME,
  directedInterfaceV4Addr: TRANSLATION_KEY.DEFAULT_INTERFACE_V4_ADDR,
  tunInterfaceName: TRANSLATION_KEY.COMMON_TUN_INTERFACE_NAME,
  primaryDns: TRANSLATION_KEY.SETTING_PRIMARY_DNS,
  secondaryDns: TRANSLATION_KEY.SETTING_SECONDARY_DNS,
  port: TRANSLATION_KEY.HUB_PORT,
};

export function RuntimeDetailModal(
  props: RuntimeDetailModalProps
): JSX.Element {
  const { close } = props;
  const { t } = useTranslation();
  const [runtimeDetail, setRuntimeDetail] = useState<
    (RuntimeDetail & { port: number }) | null
  >(null);

  useEffect(() => {
    getRuntimeDetail().then((detail) => {
      const port = getHubPort();
      setRuntimeDetail({ ...detail, port });
    });
  }, []);

  return runtimeDetail ? (
    <Modal close={close}>
      {(Object.keys(runtimeDetail) as (keyof RuntimeDetail)[]).map((key) => {
        const content = Array.isArray(runtimeDetail[key])
          ? (runtimeDetail[key] as string[]).join(",")
          : runtimeDetail[key];
        return (
          <div className={styles.item} key={key}>
            <div className={styles.title}>
              {`${t(TRANSLATION_KEY_MAP[key])}:`}
            </div>
            <div className={styles.content}>{content}</div>
          </div>
        );
      })}
    </Modal>
  ) : (
    <></>
  );
}
