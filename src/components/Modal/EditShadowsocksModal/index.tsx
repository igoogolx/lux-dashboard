import React, { useRef } from "react";
import { addProxy, ProxyTypeEnum, Shadowsocks, updateProxy } from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { proxiesSlice, RootState } from "@/reducers";
import {
  convertPluginOptsStr,
  parsePluginOptsStr,
} from "@/utils/url/shadowsocks";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  Button,
  ButtonTypeEnum,
  INPUT_SIZE,
  Modal,
  Field,
  Form,
  FieldSelector,
  PasswordFiled,
} from "@/components/Core";
import {
  ShadowsocksSchema,
  validatePlugin,
  validatePluginOptsStr,
} from "./validate";
import { ENCRYPTION_METHODS } from "./constant";
import styles from "./index.module.css";

type EditShadowsocksModalProps = {
  close: () => void;
  initialValue?: Shadowsocks & { id?: string };
  isSelected?: boolean;
};

const INIT_DATA: ShadowsocksWrapper = {
  type: ProxyTypeEnum.Shadowsocks,
  id: "",
  name: "",
  server: "",
  password: "",
  port: "",
  method: ENCRYPTION_METHODS[0],
};

type ShadowsocksWrapper = Omit<Shadowsocks, "port"> & {
  pluginOptsStr?: string;
  port: string;
};

const makeInitData = (config: Shadowsocks) => {
  const newConfig: ShadowsocksWrapper = {
    ...config,
    pluginOptsStr: "",
    port: config.port.toString(),
  };
  if (newConfig.pluginOpts) {
    newConfig.pluginOptsStr = convertPluginOptsStr(newConfig.pluginOpts);
  }
  return newConfig;
};

const makeSubmittedData = (config: ShadowsocksWrapper) => {
  const newConfig: Shadowsocks = {
    ...config,
    port: Number(config.port),
  };
  if (config.pluginOptsStr) {
    newConfig.pluginOpts = parsePluginOptsStr(config.pluginOptsStr);
  }
  return newConfig;
};

export const EditShadowsocksModal = React.memo(
  (props: EditShadowsocksModalProps) => {
    const { close, initialValue, isSelected = false } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const methodsOptions = useRef(
      ENCRYPTION_METHODS.map((METHOD) => ({ content: METHOD, id: METHOD }))
    );

    const isStarted = useSelector<RootState, boolean>(
      (state) => state.manager.isStared
    );

    const onSubmit = async (value: ShadowsocksWrapper) => {
      const submittedValue = makeSubmittedData(value);
      if (initialValue) {
        await updateProxy({
          id: value.id,
          proxy: { ...submittedValue },
        });
        dispatch(proxiesSlice.actions.updateOne({ proxy: submittedValue }));
      } else {
        const { id } = await addProxy({
          proxy: { ...submittedValue },
        });
        dispatch(
          proxiesSlice.actions.addOne({ proxy: { ...submittedValue, id } })
        );
      }
      close();
    };

    return (
      <Modal close={close}>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValue ? makeInitData(initialValue) : INIT_DATA}
          validationSchema={ShadowsocksSchema}
        >
          {({ dirty, submitForm, isValid, submitCount }) => {
            return (
              <div className={styles.container}>
                <Field<keyof ShadowsocksWrapper>
                  name="name"
                  label={t(TRANSLATION_KEY.FORM_NAME)}
                  size={INPUT_SIZE.AUTO}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="server"
                  label={t(TRANSLATION_KEY.FORM_SERVER)}
                  size={INPUT_SIZE.AUTO}
                />
                <FieldSelector<keyof ShadowsocksWrapper>
                  name="method"
                  items={methodsOptions.current}
                  label={t(TRANSLATION_KEY.FORM_ENCRYPTION)}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="port"
                  label={t(TRANSLATION_KEY.FORM_PORT)}
                  size={INPUT_SIZE.AUTO}
                  type="number"
                />
                <PasswordFiled<keyof ShadowsocksWrapper>
                  name="password"
                  label={t(TRANSLATION_KEY.FORM_PASSWORD)}
                  size={INPUT_SIZE.AUTO}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="plugin"
                  label={`${t(TRANSLATION_KEY.FORM_PLUGIN)}(${t(
                    TRANSLATION_KEY.FORM_OPTIONAL
                  )})`}
                  size={INPUT_SIZE.AUTO}
                  validate={validatePlugin}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="pluginOptsStr"
                  label={`${t(TRANSLATION_KEY.FORM_PLUGIN_OPTS)}(${t(
                    TRANSLATION_KEY.FORM_OPTIONAL
                  )})`}
                  size={INPUT_SIZE.AUTO}
                  validate={validatePluginOptsStr}
                />
                <div className={styles.buttonContainer}>
                  <Button
                    onClick={close}
                    className={styles.button}
                    buttonType={ButtonTypeEnum.Secondary}
                  >
                    {t(TRANSLATION_KEY.FORM_CANCEL)}
                  </Button>
                  <Button
                    className={styles.button}
                    disabled={
                      !dirty ||
                      (!isValid && submitCount > 0) ||
                      (isSelected && isStarted)
                    }
                    onClick={submitForm}
                  >
                    {t(TRANSLATION_KEY.FORM_SAVE)}
                  </Button>
                </div>
              </div>
            );
          }}
        </Form>
      </Modal>
    );
  }
);
