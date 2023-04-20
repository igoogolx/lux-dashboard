import React, { ReactNode } from "react";
import { useField } from "formik";
import {
  Field as FluentInput,
  Input,
  InputProps,
} from "@fluentui/react-components";

export type FieldProps<T extends string> = {
  name: T;
  validate?: (value: string) => string;
  label?: string;
  type?: InputProps["type"];
  adornment?: InputProps["contentBefore"];
};

export function Field<T extends string>(props: FieldProps<T>) {
  const { name, label, validate, type, adornment } = props;
  const [field, meta] = useField({ name, validate });
  return (
    <FluentInput
      label={label}
      validationMessage={meta.touched ? meta.error : ""}
    >
      <Input
        value={field.value as string}
        onChange={field.onChange}
        type={type}
        contentBefore={adornment}
      />
    </FluentInput>
  );
}
