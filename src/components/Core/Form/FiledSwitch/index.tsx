import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import { Switch, SwitchProps } from "../../Switch";
import styles from "./index.module.css";

type FieldSwitchProps<T extends string> = {
  name: T;
  label?: React.ReactNode;
  className?: string;
} & Omit<SwitchProps, "checked" | "onClick">;

export function FieldSwitch<T extends string>(props: FieldSwitchProps<T>) {
  const { name, label, disabled, className } = props;
  const [field, , helpers] = useField({ name });
  const { setValue } = helpers;
  return (
    <div className={classNames(className, styles.container)}>
      {label && <div className={styles.label}>{label}</div>}
      <Switch
        checked={field.value}
        onClick={() => {
          setValue(!field.value);
        }}
        disabled={disabled}
      />
    </div>
  );
}
