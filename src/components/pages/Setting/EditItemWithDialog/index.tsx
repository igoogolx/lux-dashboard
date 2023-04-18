import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@fluentui/react-components";
import styles from "@/components/pages/Setting/index.module.css";

type EditItemWithDialogProps = {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (value: string) => void;
  inputType?: "number";
  label: string;
  value: string;
  disabled?: boolean;
};

export default function EditItemWithDialog(props: EditItemWithDialogProps) {
  const {
    title,
    label,
    open,
    setOpen,
    value,
    onSubmit,
    inputType,
    disabled = false,
  } = props;

  const [editedValue, setEditedValue] = useState(value);

  useEffect(() => {
    setEditedValue(value);
  }, [value]);

  return (
    <Dialog
      modalType="modal"
      open={open}
      onOpenChange={(e, data) => {
        setOpen(data.open);
      }}
    >
      <DialogTrigger disableButtonEnhancement>
        <Input
          type={inputType}
          size="medium"
          className={styles.input}
          value={value}
          disabled={disabled}
        />
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent className={styles.dialogBody}>
            <Label required>{label}</Label>
            <Input
              type={inputType}
              required
              value={editedValue}
              onChange={(e) => {
                setEditedValue(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              onClick={() => {
                onSubmit(editedValue);
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
