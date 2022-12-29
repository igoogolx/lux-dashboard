import { setSetting, SettingRes } from "lux-js-sdk";
import {
  Button,
  ButtonTypeEnum,
  Field,
  FieldSwitch,
  Icon,
  IconNameEnum,
  Form,
  notifier,
  PlacementEnum,
  Tooltip,
} from "@/components/Core";
import React, { useRef } from "react";
import { settingSlice } from "@/reducers/setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTranslation } from "react-i18next";

import { FormikProps } from "formik";
import styles from "./index.module.css";

type FormData = {
  localServerHttpEnabled: boolean;
  localServerHttpPort: string;
} & SettingRes;

const convertData = (rawData: SettingRes) => {
  const result: FormData = {
    ...rawData,
    localServerHttpEnabled: rawData.localServer.http.enabled,
    localServerHttpPort: rawData.localServer.http.port.toString(),
  };
  return result;
};

const parseData = (data: FormData) => {
  const result: FormData = {
    ...data,
    trueProxyServer: data.trueProxyServer,
    localServer: {
      http: {
        enabled: data.localServerHttpEnabled,
        port: Number(data.localServerHttpPort),
      },
    },
  };
  return result;
};

type SettingFormProps = {
  initValue: SettingRes;
};
export function SettingForm(props: SettingFormProps) {
  const { initValue } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared || state.manager.isLoading
  );

  const formInstance = useRef<FormikProps<FormData>>(null);

  const onSubmit = async (data: FormData) => {
    const submitData = parseData(data);
    await setSetting(submitData);
    dispatch(settingSlice.actions.setSetting(data));
    formInstance.current?.resetForm({ values: data });
    notifier.success(t(TRANSLATION_KEY.SAVE_SUCCESS));
  };

  return (
    <div className={styles.form}>
      <Form
        onSubmit={onSubmit}
        initialValues={convertData(initValue)}
        innerRef={formInstance}
      >
        {({ dirty, submitCount, isValid, setValues, submitForm, values }) => {
          return (
            <>
              <div className={styles.fields}>
                <Field<keyof FormData>
                  name="defaultInterface"
                  label={
                    <div className={styles.label}>
                      <span className={styles.desc}>
                        {t(TRANSLATION_KEY.DEFAULT_INTERFACE)}
                      </span>
                      <Tooltip
                        content={t(TRANSLATION_KEY.DEFAULT_INTERFACE_TOOLTIP)}
                        placement={PlacementEnum.Bottom}
                      >
                        <Icon name={IconNameEnum.Question} />
                      </Tooltip>
                    </div>
                  }
                  className={styles.field}
                  disabled={isStarted}
                />
                <Field<keyof FormData>
                  name="trueProxyServer"
                  label={
                    <div className={styles.label}>
                      <span className={styles.desc}>
                        {t(TRANSLATION_KEY.TRUE_PROXY_SERVER)}
                      </span>
                      <Tooltip
                        content={t(TRANSLATION_KEY.TRUE_PROXY_SERVER_TOOLTIPS)}
                      >
                        <Icon name={IconNameEnum.Question} />
                      </Tooltip>
                    </div>
                  }
                  className={styles.field}
                  disabled={isStarted}
                />
                <FieldSwitch<keyof FormData>
                  name="localServerHttpEnabled"
                  label={
                    <div className={styles.label}>
                      <span className={styles.desc}>
                        {t(TRANSLATION_KEY.HTTP_SERVER_SWITCH_LABEL)}
                      </span>
                      <Tooltip
                        content={t(TRANSLATION_KEY.HTTP_SERVER_SWITCH_TOOLTIP)}
                      >
                        <Icon name={IconNameEnum.Question} />
                      </Tooltip>
                    </div>
                  }
                  className={styles.field}
                  disabled={isStarted}
                />
                {values.localServerHttpEnabled && (
                  <Field<keyof FormData>
                    name="localServerHttpPort"
                    label={`${t(TRANSLATION_KEY.HTTP_SERVER_PORT_LABEL)}`}
                    className={styles.field}
                    disabled={isStarted}
                  />
                )}
              </div>
              <div className={styles.bar}>
                <Button
                  disabled={!dirty}
                  buttonType={ButtonTypeEnum.Secondary}
                  className={styles.resetBtn}
                  onClick={() => {
                    setValues(convertData(initValue));
                  }}
                >
                  {t(TRANSLATION_KEY.FORM_RESET)}
                </Button>
                <Button
                  disabled={
                    !dirty || isStarted || (!isValid && submitCount > 0)
                  }
                  onClick={submitForm}
                >
                  {t(TRANSLATION_KEY.FORM_SAVE)}
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
