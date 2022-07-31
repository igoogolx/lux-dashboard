import * as React from "react";
import classNames from "classnames";
import styles from "./index.module.css";

export type SwitchProps = {
  disabled?: boolean;
  checked: boolean;
  onClick: () => void;
};

export function Switch(props: SwitchProps): JSX.Element {
  const { checked, onClick, disabled = false } = props;
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="switch-checkbox"
        checked={checked}
        onChange={onClick}
      />
      <label
        htmlFor="switch-checkbox"
        className={classNames(styles.label, { [styles.disabled]: disabled })}
      >
        <span className={styles.button} />
      </label>
    </>
  );
}
