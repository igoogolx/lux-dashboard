import React from "react";
import { useField } from "formik";
import {
  Field as FluentInput,
  Input,
  InputProps,
} from "@fluentui/react-components";
import { bo } from "chart.js/dist/chunks/helpers.core";

export type FieldProps<T extends string> = {
  name: T;
  validate?: (value: string) => string;
  label?: string;
  type?: InputProps["type"];
  adornment?: InputProps["contentBefore"];
  disabled?: boolean;
};

export function Field<T extends string>(props: FieldProps<T>) {
  const { name, label, validate, type, adornment, disabled = false } = props;
  const [field, meta, helpers] = useField({ name, validate });
  const { setValue } = helpers;
  return (
    <FluentInput
      label={label}
      validationMessage={meta.touched ? meta.error : ""}
    >
      <Input
        value={field.value as string}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
        contentAfter={adornment}
        disabled={disabled}
      />
    </FluentInput>
  );
}
