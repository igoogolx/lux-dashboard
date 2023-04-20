import React from "react";
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
  getValue?: (input: any) => string;
  reverseValue?: (output: string) => any;
};

export function Field<T extends string>(props: FieldProps<T>) {
  const { name, label, validate, type, adornment, getValue, reverseValue } =
    props;
  const [field, meta, helpers] = useField({ name, validate });
  const { setValue } = helpers;
  return (
    <FluentInput
      label={label}
      validationMessage={meta.touched ? meta.error : ""}
    >
      <Input
        value={getValue ? getValue(field.value) : (field.value as string)}
        onChange={(e) => {
          setValue(
            reverseValue ? reverseValue(e.target.value) : e.target.value
          );
        }}
        type={type}
        contentAfter={adornment}
      />
    </FluentInput>
  );
}
