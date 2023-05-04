import React from "react";
import { Field, FieldSwitch, Form } from "@/components/Core";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import * as Yup from "yup";
import { Button } from "@fluentui/react-components";
import { V2rayObfs } from "lux-js-sdk";
import styles from "./index.module.css";

type EditV2rayProps = {
  close: () => void;
  initialValue?: V2rayObfs;
  onChange: (data: V2rayObfs) => void;
};

const INIT_DATA: V2rayObfs = {
  mode: "websocket",
  host: "",
  port: "",
  path: "",
  tLS: false,
  skipCertVerify: false,
};

const HttpSchema = Yup.object().shape({
  host: Yup.string(),
  mode: Yup.string().required("Required"),
});

export function EditV2rayPlugin(props: EditV2rayProps) {
  const { t } = useTranslation();
  const { close, initialValue, onChange } = props;
  const onSubmit = async (data: V2rayObfs) => {
    onChange(data);
    close();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue || INIT_DATA}
      validationSchema={HttpSchema}
    >
      {({ dirty, submitForm }) => {
        return (
          <>
            <Field name="mode" label={t(TRANSLATION_KEY.MODE)} />
            <Field name="host" label={t(TRANSLATION_KEY.HOST)} />
            <Field name="port" label={t(TRANSLATION_KEY.FORM_PORT)} />
            <Field name="path" label={t(TRANSLATION_KEY.HOST)} />
            <FieldSwitch name="tls" label={t(TRANSLATION_KEY.HOST)} />
            <FieldSwitch
              name="skipCertVerify"
              label={t(TRANSLATION_KEY.HOST)}
            />
            <div className={styles.buttonContainer}>
              <Button onClick={close} className={styles.button}>
                {t(TRANSLATION_KEY.FORM_CANCEL)}
              </Button>
              <Button
                className={styles.button}
                disabled={!dirty}
                onClick={submitForm}
                appearance="primary"
              >
                {t(TRANSLATION_KEY.FORM_SAVE)}
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
