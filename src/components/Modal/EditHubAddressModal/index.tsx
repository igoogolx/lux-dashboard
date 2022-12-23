import { TRANSLATION_KEY } from "@/i18n/locales/key";
import {
  Button,
  ButtonTypeEnum,
  Field,
  Modal,
  NewForm,
} from "@/components/Core";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { HubAddress, getHubAddress, setHubAddress } from "@/utils/hubAddress";
import styles from "./index.module.css";

type EditHubAddressModalProps = {
  close: () => void;
};

export default function EditHubAddressModal(
  props: EditHubAddressModalProps
): JSX.Element {
  const { close } = props;
  const { t } = useTranslation();

  const onSubmit = (data: HubAddress) => {
    setHubAddress(data);
    window.location.reload();
  };
  const initialValue = getHubAddress();

  return (
    <Modal>
      <div className={styles.title}>{t(TRANSLATION_KEY.SET_HUB_ADDRESS)}</div>
      <NewForm onSubmit={onSubmit} initialValues={initialValue}>
        {({ dirty, submitForm }) => {
          return (
            <>
              <Field<keyof HubAddress>
                name="server"
                label={t(TRANSLATION_KEY.FORM_SERVER)}
              />
              <Field<keyof HubAddress>
                name="port"
                label={t(TRANSLATION_KEY.FORM_PORT)}
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
                  disabled={!dirty}
                  onClick={submitForm}
                >
                  {t(TRANSLATION_KEY.FORM_SAVE)}
                </Button>
              </div>
            </>
          );
        }}
      </NewForm>
    </Modal>
  );
}
