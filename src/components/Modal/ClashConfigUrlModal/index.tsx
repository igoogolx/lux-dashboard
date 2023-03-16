import React, { useEffect, useState } from "react";
import { Button, Input, Modal, ModalSizeEnum } from "@/components/Core";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  addProxiesFromClashUrlConfig,
  getClashYamlUrl,
  updateClashYamlUrl,
} from "lux-js-sdk";
import { useDispatch } from "react-redux";
import { proxiesSlice } from "@/reducers";
import styles from "./index.module.css";

type ClashConfigUrlModalProps = {
  close: () => void;
};

function ClashConfigUrlModal(props: ClashConfigUrlModalProps) {
  const { close } = props;
  const { t } = useTranslation();
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleConfirm = async () => {
    try {
      setLoading(true);
      await updateClashYamlUrl({ url: destination });
      const res = await addProxiesFromClashUrlConfig({ url: destination });
      dispatch(proxiesSlice.actions.addMany(res));
      close();
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getClashYamlUrl().then((res) => {
      setDestination(res.url);
    });
  }, []);
  return (
    <Modal close={close} size={ModalSizeEnum.Large}>
      <div className={styles.search}>
        <Input
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
          className={styles.input}
          placeholder={t(TRANSLATION_KEY.CLASH_URL)}
          autoFocus
        />
        <Button onClick={handleConfirm} disabled={loading}>
          {t(TRANSLATION_KEY.OK)}
        </Button>
      </div>
    </Modal>
  );
}

export default ClashConfigUrlModal;