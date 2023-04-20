import React from "react";
import { useLockBodyScroll } from "@/hooks";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
} from "@fluentui/react-components";

type ModalProps = {
  children: React.ReactNode;
  close?: () => void;
  closeWhenClickOutside?: boolean;
};

export const Modal = React.memo((props: ModalProps) => {
  const { close, children, closeWhenClickOutside = false } = props;

  useLockBodyScroll();
  return (
    <Dialog
      open
      onOpenChange={(e, data) => {
        if (!data.open) {
          close?.();
        }
      }}
      modalType={closeWhenClickOutside ? "alert" : "modal"}
    >
      <DialogSurface>
        <DialogBody>
          <DialogContent>{children}</DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
});
