import React, { useRef } from "react";
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
  Modal,
  Field,
  Form,
  FieldSelector,
  PasswordFiled,
} from "@/components/Core";
import { addProxy, ProxyTypeEnum, Shadowsocks, updateProxy } from "lux-js-sdk";
import { ShadowsocksSchema, validatePluginOptsStr } from "./validate";
import { ENCRYPTION_METHODS, SHADOWSOCKS_PLUINS } from "./constant";
import styles from "./index.module.css";

type EditShadowsocksModalProps = {
  close: () => void;
  initialValue?: Shadowsocks;
  isSelected?: boolean;
};

const INIT_DATA: ShadowsocksWrapper = {
  type: ProxyTypeEnum.Shadowsocks,
  id: "",
  name: "",
  server: "",
  password: "",
  port: 1080,
  cipher: ENCRYPTION_METHODS[0],
};

// TODO: remove pluginOptsStr
type ShadowsocksWrapper = Shadowsocks & {
  pluginOptsStr?: string;
};

const makeInitData = (config: Shadowsocks) => {
  const newConfig: ShadowsocksWrapper = {
    ...config,
    pluginOptsStr: "",
  };
  if (newConfig["plugin-opts"]) {
    newConfig.pluginOptsStr = convertPluginOptsStr(newConfig["plugin-opts"]);
  }
  return newConfig;
};

const makeSubmittedData = (config: ShadowsocksWrapper): Shadowsocks => {
  const newConfig = {
    ...config,
  };
  if (newConfig.pluginOptsStr) {
    newConfig["plugin-opts"] = parsePluginOptsStr(newConfig.pluginOptsStr);
  }
  delete newConfig.pluginOptsStr;
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

    const pluginOptions = useRef(
      SHADOWSOCKS_PLUINS.map((METHOD) => ({ content: METHOD, id: METHOD }))
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
                />
                <Field<keyof ShadowsocksWrapper>
                  name="server"
                  label={t(TRANSLATION_KEY.FORM_SERVER)}
                />
                <FieldSelector<keyof ShadowsocksWrapper>
                  name="cipher"
                  items={methodsOptions.current}
                  label={t(TRANSLATION_KEY.FORM_ENCRYPTION)}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="port"
                  label={t(TRANSLATION_KEY.FORM_PORT)}
                  type="number"
                />
                <PasswordFiled<keyof ShadowsocksWrapper>
                  name="password"
                  label={t(TRANSLATION_KEY.FORM_PASSWORD)}
                />
                <FieldSelector<keyof ShadowsocksWrapper>
                  clearable
                  name="plugin"
                  items={pluginOptions.current}
                  label={`${t(TRANSLATION_KEY.FORM_PLUGIN)}(${t(
                    TRANSLATION_KEY.FORM_OPTIONAL
                  )})`}
                />
                <Field<keyof ShadowsocksWrapper>
                  name="pluginOptsStr"
                  label={`${t(TRANSLATION_KEY.FORM_PLUGIN_OPTS)}(${t(
                    TRANSLATION_KEY.FORM_OPTIONAL
                  )})`}
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
