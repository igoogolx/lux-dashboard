import React from "react";
import styles from "./index.module.css";
import { Button, ButtonTypeEnum } from "../Button";
import { Icon, IconNameEnum } from "../Icon";
import { Modal } from "../Modal";

type ConfirmModalPros = {
  title: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  closeWhenClickOutside?: boolean;
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
  } = props;
  return (
    <Modal close={onCancel} closeWhenClickOutside={closeWhenClickOutside}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>
          <Button
            className={styles.cancelBtn}
            buttonType={ButtonTypeEnum.Secondary}
            onClick={onCancel}
          >
            {cancelText || "Cancel"}
          </Button>
          <Button onClick={onConfirm} disabled={loading}>
            {loading && (
              <Icon name={IconNameEnum.Spin} className={styles.loading} />
            )}
            {confirmText || "Confirm"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
