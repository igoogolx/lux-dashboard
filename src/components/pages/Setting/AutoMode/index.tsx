import React, { useRef, useState } from "react";
import styles from "@/components/pages/Setting/index.module.css";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  Caption1,
  Card,
  Dropdown,
  Option,
  Subtitle2,
  Switch,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, settingSlice } from "@/reducers";
import { setSetting, SettingRes } from "lux-js-sdk";
import { notifier } from "@/components/Core";
import EditItemWithDialog from "@/components/pages/Setting/EditItemWithDialog";

export default function AutoMode() {
  const { t } = useTranslation();

  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared || state.manager.isLoading
  );

  const modeTypeOptions = useRef([
    { content: "url-test", id: "url-test" },
    { content: "fallback", id: "fallback" },
  ]);

  const setting = useSelector<RootState, SettingRes>((state) => state.setting);

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (newAutoMode: SettingRes["outbound"]["autoMode"]) => {
    const newSetting = {
      ...setting,
      outbound: { ...setting.outbound, autoMode: newAutoMode },
    };

    await setSetting(newSetting);
    dispatch(settingSlice.actions.setSetting(newSetting));
    setOpenModal(false);
    notifier.success(t(TRANSLATION_KEY.SAVE_SUCCESS));
  };

  return (
    <Card className={styles.card}>
      <div className={styles.cardItem}>
        <div className={styles.desc}>
          <Subtitle2>{t(TRANSLATION_KEY.MODE_SWITCH_LABEL)}</Subtitle2>
          <Caption1>{t(TRANSLATION_KEY.MODE_SWITCH_TOOLTIP)}</Caption1>
        </div>
        <Switch
          disabled={isStarted}
          checked={setting.outbound.autoMode.enabled}
          onChange={(e, data) => {
            onSubmit({
              ...setting.outbound.autoMode,
              enabled: data.checked,
            });
          }}
        />
      </div>

      {setting.outbound.autoMode.enabled && (
        <>
          <div className={styles.cardItem}>
            <div className={styles.desc}>
              <Subtitle2>{t(TRANSLATION_KEY.PROXY_MODE_TYPE_LABEL)}</Subtitle2>
              <Caption1>{t(TRANSLATION_KEY.PROXY_MODE_TYPE_DESC)}</Caption1>
            </div>
            <Dropdown
              disabled={isStarted}
              value={setting.outbound.autoMode.type}
              onOptionSelect={(e, data) => {
                onSubmit({
                  ...setting.outbound.autoMode,
                  type: data.optionValue as SettingRes["outbound"]["autoMode"]["type"],
                });
              }}
            >
              {modeTypeOptions.current.map((option) => (
                <Option key={option.id}>{option.content}</Option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.desc}>
              <Subtitle2>{t(TRANSLATION_KEY.TESTING_URL_LABEL)}</Subtitle2>
              <Caption1>{t(TRANSLATION_KEY.TESTING_URL_DESC)}</Caption1>
            </div>
            <EditItemWithDialog
              disabled={isStarted}
              title="Edit testing url"
              open={openModal}
              setOpen={setOpenModal}
              onSubmit={(value) => {
                onSubmit({
                  ...setting.outbound.autoMode,
                  url: value,
                });
              }}
              label="Testing url"
              value={setting.outbound.autoMode.url}
            />
          </div>
        </>
      )}
    </Card>
  );
}
