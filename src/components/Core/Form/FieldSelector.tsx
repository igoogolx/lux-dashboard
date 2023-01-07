import * as React from "react";
import classNames from "classnames";
import { useField } from "formik";
import styles from "../Selector/index.module.css";
import { Selector, SelectorProps } from "../Selector";

type FieldSelectorProps<T extends string> = Omit<
  {
    name: T;
    label: string;
    render?: (value: string) => React.ReactNode;
    selectorClassName?: string;
  } & SelectorProps,
  "onChange" | "value"
>;

export function FieldSelector<T extends string>(
  props: FieldSelectorProps<T>
): JSX.Element {
  const { name, label, render, className, selectorClassName, ...restProps } =
    props;
  const [field, , helpers] = useField({ name });
  const { setValue } = helpers;

  return (
    <div className={classNames(styles.container, className)}>
      {label && (
        <div className={styles.label}>
          <span>{label}:</span>
        </div>
      )}
      <Selector
        value={render ? render(field.value) : field.value}
        onChange={setValue}
        className={selectorClassName}
        {...restProps}
      />
    </div>
  );
}
