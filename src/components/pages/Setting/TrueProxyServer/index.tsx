import React, { useState } from "react";
import styles from "@/components/pages/Setting/index.module.css";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, settingSlice } from "@/reducers";
import { setSetting, SettingRes } from "lux-js-sdk";
import { notifier } from "@/components/Core";

export default function TrueProxyServer() {
  const { t } = useTranslation();
  const [editedValue, setEditedValue] = useState("");
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const setting = useSelector<RootState, SettingRes>((state) => state.setting);
  const onSubmit = async () => {
    const newSetting = { ...setting, trueProxyServer: editedValue };
    await setSetting(newSetting);
    dispatch(settingSlice.actions.setSetting(newSetting));
    setOpenModal(false);
    notifier.success(t(TRANSLATION_KEY.SAVE_SUCCESS));
  };

  return (
    <Card className={styles.card}>
      <div className={styles.cardItem}>
        <div>
          <div className={styles.title}>
            {t(TRANSLATION_KEY.TRUE_PROXY_SERVER)}
          </div>
          <div className={styles.desc}>
            {t(TRANSLATION_KEY.TRUE_PROXY_SERVER_TOOLTIPS)}
          </div>
        </div>
        <Dialog
          modalType="modal"
          open={openModal}
          onOpenChange={(e, data) => {
            setOpenModal(data.open);
          }}
        >
          <DialogTrigger disableButtonEnhancement>
            <Input
              size="medium"
              className={styles.input}
              value={setting.trueProxyServer}
            />
          </DialogTrigger>
          <DialogSurface aria-describedby={undefined}>
            <DialogBody>
              <DialogTitle>Edit the true proxy server</DialogTitle>
              <DialogContent className={styles.dialogBody}>
                <Label required htmlFor="true-proxy-server-input">
                  True proxy server
                </Label>
                <Input
                  required
                  id="true-proxy-server-input"
                  value={editedValue}
                  onChange={(e) => {
                    setEditedValue(e.target.value);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">Close</Button>
                </DialogTrigger>
                <Button appearance="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </div>
    </Card>
  );
}
