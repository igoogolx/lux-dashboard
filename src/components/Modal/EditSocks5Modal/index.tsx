import { addProxy, ProxyTypeEnum, Socks5, updateProxy } from "lux-js-sdk";
import React from "react";
import { Button, ButtonTypeEnum, Modal, Field, Form } from "@/components/Core";
import { useDispatch, useSelector } from "react-redux";
import { proxiesSlice, RootState } from "@/reducers";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import * as Yup from "yup";
import { MAX_PORT, MIN_PORT } from "@/utils/validator";
import styles from "./index.module.css";

type EditSocks5ModalProps = {
  close: () => void;
  initialValue?: Socks5 & { id?: string };
  isSelected?: boolean;
};

type Socks5FormValue = Omit<Socks5, "port"> & { port: string };

const makeInitData = (config: Socks5) => {
  const newConfig: Socks5FormValue = {
    ...config,
    port: config.port.toString(),
  };
  return newConfig;
};

const INIT_DATA: Socks5FormValue = {
  type: ProxyTypeEnum.Socks5,
  server: "",
  id: "",
  name: "",
  port: "",
  password: "",
  username: "",
};

const Socks5Schema = Yup.object().shape({
  name: Yup.string(),
  server: Yup.string().required("Required"),
  port: Yup.number().min(MIN_PORT).max(MAX_PORT).required("Required"),
  username: Yup.string(),
  password: Yup.string(),
});

export function EditSocks5Modal(props: EditSocks5ModalProps) {
  const { t } = useTranslation();
  const { close, initialValue, isSelected } = props;
  const dispatch = useDispatch();
  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared
  );
  const onSubmit = async (data: Socks5FormValue) => {
    const submittedValue = { ...data, port: Number(data.port) };
    if (initialValue) {
      await updateProxy({
        id: data.id,
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
        validationSchema={Socks5Schema}
      >
        {({ dirty, submitForm }) => {
          return (
            <>
              <Field<keyof Socks5>
                name="name"
                label={t(TRANSLATION_KEY.FORM_NAME)}
              />
              <Field<keyof Socks5>
                name="server"
                label={t(TRANSLATION_KEY.FORM_SERVER)}
              />
              <Field<keyof Socks5>
                name="port"
                label={t(TRANSLATION_KEY.FORM_PORT)}
              />
              <Field<keyof Socks5>
                name="username"
                label={`${t(TRANSLATION_KEY.FORM_PASSWORD)}(${t(
                  TRANSLATION_KEY.FORM_OPTIONAL
                )})`}
              />
              <Field<keyof Socks5>
                name="password"
                label={`${t(TRANSLATION_KEY.FORM_USERNAME)}(${t(
                  TRANSLATION_KEY.FORM_OPTIONAL
                )})`}
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
                  disabled={!dirty || (isSelected && isStarted)}
                  onClick={submitForm}
                >
                  {t(TRANSLATION_KEY.FORM_SAVE)}
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </Modal>
  );
}
