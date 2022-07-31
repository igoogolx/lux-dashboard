import React from "react";
import { useField } from "formik";
import { Input, InputProps } from "../Input";

export type FieldProps<T extends string> = {
  name: T;
  validate?: (value: string) => string;
} & Omit<InputProps, "value" | "onChange" | "errorMsg" | "name">;

export function Field<T extends string>(props: FieldProps<T>) {
  const { name, label, validate, ...restProps } = props;
  const [field, meta] = useField({ name, validate });
  return (
    <Input
      value={field.value}
      onChange={field.onChange}
      name={field.name}
      label={label}
      errorMsg={meta.touched ? meta.error : ""}
      {...restProps}
    />
  );
}
