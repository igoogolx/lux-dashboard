import React, { useRef, useState } from "react";
import styles from "@/components/pages/Setting/index.module.css";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { Card, Switch, Option, Dropdown } from "@fluentui/react-components";
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

  const onSubmit = async (newOutbound: Partial<SettingRes["outbound"]>) => {
    const newSetting = {
      ...setting,
      outbound: { ...setting.outbound },
    };

    if (newOutbound.mode) {
      newSetting.outbound.mode = newOutbound.mode;
    }
    if (newOutbound.config) {
      newSetting.outbound.config = {
        ...newSetting.outbound.config,
        ...newOutbound.config,
      };
    }

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
            {t(TRANSLATION_KEY.MODE_SWITCH_LABEL)}
          </div>
          <div className={styles.desc}>
            {t(TRANSLATION_KEY.MODE_SWITCH_TOOLTIP)}
          </div>
        </div>
        <Switch
          disabled={isStarted}
          checked={setting.outbound.mode === "auto"}
          onChange={(e, data) => {
            onSubmit({
              mode: data.checked ? "auto" : "select",
            });
          }}
        />
      </div>

      {setting.outbound.mode === "auto" && (
        <>
          <div className={styles.cardItem}>
            <div>
              <div className={styles.title}>
                {t(TRANSLATION_KEY.PROXY_MODE_TYPE_LABEL)}
              </div>
              <div className={styles.desc}>
                <></>
              </div>
            </div>
            <Dropdown
              disabled={isStarted}
              value={setting.outbound.config.type}
              onOptionSelect={(e, data) => {
                onSubmit({
                  config: {
                    ...setting.outbound.config,
                    type: data.optionValue as SettingRes["outbound"]["config"]["type"],
                  },
                });
              }}
            >
              {modeTypeOptions.current.map((option) => (
                <Option key={option.id}>{option.content}</Option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.cardItem}>
            <div>
              <div className={styles.title}>
                {t(TRANSLATION_KEY.TESTING_URL_LABEL)}
              </div>
              <div className={styles.desc}>
                <></>
              </div>
            </div>
            <EditItemWithDialog
              disabled={isStarted}
              title="Edit testing url"
              open={openModal}
              setOpen={setOpenModal}
              onSubmit={(value) => {
                onSubmit({
                  config: {
                    ...setting.outbound.config,
                    url: value,
                  },
                });
              }}
              label="Testing url"
              value={setting.outbound.config.url}
            />
          </div>
        </>
      )}
    </Card>
  );
}
