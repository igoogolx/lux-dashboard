import React, { useRef } from "react";
import { Field, FieldSelector, Form } from "@/components/Core";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import * as Yup from "yup";
import { Button } from "@fluentui/react-components";
import { Obfs, ObfsModeEnum } from "lux-js-sdk";
import styles from "./index.module.css";

type EditObfsProps = {
  close: () => void;
  initialValue?: Obfs;
  onChange: (data: Obfs) => void;
};

const INIT_DATA: Obfs = {
  host: "",
  mode: ObfsModeEnum.Http,
};

const HttpSchema = Yup.object().shape({
  host: Yup.string(),
  mode: Yup.string().required("Required"),
});

export function EditObfsPlugin(props: EditObfsProps) {
  const { t } = useTranslation();
  const { close, initialValue, onChange } = props;
  const onSubmit = async (data: Obfs) => {
    onChange(data);
    close();
  };

  const modeOption = useRef([
    {
      id: ObfsModeEnum.Http,
      content: "Http",
    },
    {
      id: ObfsModeEnum.Tls,
      content: "Tls",
    },
  ]);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue || INIT_DATA}
      validationSchema={HttpSchema}
    >
      {({ dirty, submitForm }) => {
        return (
          <>
            <Field name="host" label={t(TRANSLATION_KEY.FORM_NAME)} />
            <FieldSelector
              name="mode"
              label={t(TRANSLATION_KEY.FORM_SERVER)}
              items={modeOption.current}
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
