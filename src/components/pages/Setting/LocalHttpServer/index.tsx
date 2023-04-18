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
  Switch,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, settingSlice } from "@/reducers";
import { setSetting, SettingRes } from "lux-js-sdk";
import { notifier } from "@/components/Core";

export default function LocalHttpServer() {
  const { t } = useTranslation();

  const setting = useSelector<RootState, SettingRes>((state) => state.setting);
  const [editedValue, setEditedValue] = useState(
    setting.localServer.http.port.toString()
  );

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (
    httpConfig: Partial<SettingRes["localServer"]["http"]>
  ) => {
    const newSetting = {
      ...setting,
      localServer: {
        http: {
          ...setting.localServer.http,
          ...httpConfig,
        },
      },
    };
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
            {t(TRANSLATION_KEY.HTTP_SERVER_SWITCH_LABEL)}
          </div>
          <div className={styles.desc}>
            {t(TRANSLATION_KEY.HTTP_SERVER_SWITCH_TOOLTIP)}
          </div>
        </div>
        <Switch
          checked={setting.localServer.http.enabled}
          onChange={(e, data) => {
            onSubmit({ enabled: data.checked });
          }}
        />
      </div>
      {setting.localServer.http.enabled && (
        <div className={styles.cardItem}>
          <div>
            <div className={styles.title}>
              {t(TRANSLATION_KEY.HTTP_SERVER_PORT_LABEL)}
            </div>
            <div className={styles.desc}>
              {t(TRANSLATION_KEY.HTTP_SERVER_SWITCH_TOOLTIP)}
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
                type="number"
                size="medium"
                className={styles.input}
                value={setting.localServer.http.port.toString()}
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
                    type="number"
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
                  <Button
                    appearance="primary"
                    onClick={() => {
                      onSubmit({ port: +editedValue });
                    }}
                  >
                    Submit
                  </Button>
                </DialogActions>
              </DialogBody>
            </DialogSurface>
          </Dialog>
        </div>
      )}
    </Card>
  );
}
