import React from "react";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import styles from "./index.module.css";
import { Button, ButtonTypeEnum } from "../Button";
import { Icon, IconNameEnum } from "../Icon";
import { Modal } from "../Modal";

type ConfirmModalPros = {
  title: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  closeWhenClickOutside?: boolean;
  hideCancelText?: boolean;
  hideConfirmText?: boolean;
  loading?: boolean;
};

export function ConfirmModal(props: ConfirmModalPros) {
  const {
    title,
    content,
    onCancel,
    onConfirm,
    cancelText,
    confirmText,
    closeWhenClickOutside,
    loading = false,
    hideCancelText = false,
    hideConfirmText = false,
  } = props;

  const { t } = useTranslation();

  return (
    <Modal close={onCancel} closeWhenClickOutside={closeWhenClickOutside}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>
          {!hideCancelText && (
            <Button
              className={styles.cancelBtn}
              buttonType={ButtonTypeEnum.Secondary}
              onClick={onCancel}
            >
              {cancelText || t(TRANSLATION_KEY.FORM_CANCEL)}
            </Button>
          )}
          {!hideConfirmText && (
            <Button onClick={onConfirm} disabled={loading}>
              {loading && (
                <Icon name={IconNameEnum.Spin} className={styles.loading} />
              )}
              {confirmText || t(TRANSLATION_KEY.CONFIRM)}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
