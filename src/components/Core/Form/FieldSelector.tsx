import * as React from "react";
import { useField } from "formik";
import { Button, Dropdown, Field, Option } from "@fluentui/react-components";
import { useMemo } from "react";
import { EditRegular } from "@fluentui/react-icons";
import { MenuItemProps } from "../Menu";

type FieldSelectorProps<T extends string> = {
  name: T;
  label: string;
  items: MenuItemProps[];
  clearable?: boolean;
  editable?: boolean;
};

export function FieldSelector<T extends string>(
  props: FieldSelectorProps<T>
): JSX.Element {
  const { name, label, items, clearable = false, editable = false } = props;
  const [field, , helpers] = useField({ name });
  const { setValue } = helpers;

  const currentSelectedOption = useMemo(() => {
    return items.find((item) => item.id === field.value);
  }, [field.value, items]);

  return (
    <Field label={label}>
      <Dropdown
        value={(currentSelectedOption?.content as string) || ""}
        onOptionSelect={(e, data) => {
          if (clearable && data.optionValue === field.value) {
            setValue("");
            return;
          }
          setValue(data.optionValue);
        }}
        disabled={editable}
      >
        {items.map((item) => (
          <Option
            key={item.id}
            value={item.id.toString()}
            text={item.content as string}
          >
            {item.content as string}
          </Option>
        ))}
      </Dropdown>
      {editable && <Button icon={<EditRegular />} />}
    </Field>
  );
}
