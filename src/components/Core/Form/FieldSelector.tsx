import * as React from "react";
import { useField } from "formik";
import { Dropdown, Field, Option } from "@fluentui/react-components";
import { MenuItemProps } from "../Menu";

type FieldSelectorProps<T extends string> = {
  name: T;
  label: string;
  render?: (value: string) => React.ReactNode;
  items: MenuItemProps[];
  clearable?: boolean;
};

export function FieldSelector<T extends string>(
  props: FieldSelectorProps<T>
): JSX.Element {
  const { name, label, render, items, clearable = false } = props;
  const [field, , helpers] = useField({ name });
  const { setValue } = helpers;

  return (
    <Field label={label}>
      <Dropdown
        value={(render ? render(field.value) : field.value) || ""}
        onOptionSelect={(e, data) => {
          console.log(data);
          if (clearable && data.optionValue === field.value) {
            setValue("");
            return;
          }
          setValue(data.optionValue);
        }}
      >
        {items.map((item) => (
          <Option key={item.id} value={item.id.toString()}>
            {item.content as string}
          </Option>
        ))}
      </Dropdown>
    </Field>
  );
}
