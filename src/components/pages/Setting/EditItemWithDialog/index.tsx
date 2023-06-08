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
  Dropdown,
  Input,
  Label,
  Option,
} from "@fluentui/react-components";
import styles from "@/components/pages/Setting/index.module.css";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { MenuItemProps } from "@/components/Core";

type EditItemWithDialogProps = {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (value: string) => void;
  inputType?: "number";
  label: string;
  value: string;
  disabled?: boolean;
  selectorItems?: MenuItemProps[];
  type?: "input" | "selector";
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
    selectorItems,
    type = "input",
  } = props;

  const { t } = useTranslation();

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
            {type === "input" ? (
              <Input
                type={inputType}
                required
                value={editedValue}
                onChange={(e) => {
                  setEditedValue(e.target.value);
                }}
              />
            ) : (
              selectorItems && (
                <Dropdown
                  value={editedValue}
                  onOptionSelect={(e, data) => {
                    setEditedValue(data.optionValue as string);
                  }}
                >
                  {selectorItems.map((option) => (
                    <Option key={option.content as string}>
                      {option.content as string}
                    </Option>
                  ))}
                </Dropdown>
              )
            )}
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">{t(TRANSLATION_KEY.CLOSE)}</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              onClick={() => {
                onSubmit(editedValue);
              }}
            >
              {t(TRANSLATION_KEY.FORM_SAVE)}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
