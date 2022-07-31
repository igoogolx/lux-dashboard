import React from "react";
import { Input, InputProps } from "../Input";
import { Selector, SelectorProps } from "../Selector";
import styles from "./index.module.css";

type InputGroupProps = {
  selectorItems: SelectorProps["items"];
  selectorValue: SelectorProps["value"];
  inputValue: string;
  onSelectorChange: SelectorProps["onChange"];
  onInputChange: InputProps["onChange"];
};

export function InputGroup(props: InputGroupProps) {
  const {
    selectorItems,
    selectorValue,
    inputValue,
    onSelectorChange,
    onInputChange,
  } = props;
  return (
    <div className={styles.container}>
      <Selector
        value={selectorValue}
        items={selectorItems}
        onChange={onSelectorChange}
        className={styles.selector}
      />
      <Input
        value={inputValue}
        onChange={onInputChange}
        className={styles.input}
        borderLess
      />
    </div>
  );
}
