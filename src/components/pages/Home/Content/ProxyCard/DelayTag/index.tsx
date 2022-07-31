import * as React from "react";
import { useMemo } from "react";
import classNames from "classnames";
import { Icon, IconNameEnum } from "@/components/Core";
import { useTestDelay } from "@/hooks";
import styles from "./index.module.css";

type DelayTagProps = {
  id: string;
  value: number;
  className?: string;
  loading?: boolean;
};

enum TypeEnum {
  Success = "success",
  Warn = "warn",
  Error = "error",
}

export function DelayTag(props: DelayTagProps): JSX.Element {
  const { value, className, loading = false, id } = props;
  const type = useMemo(() => {
    if (value > 0 && value <= 1000) return TypeEnum.Success;
    if (value > 1000) return TypeEnum.Warn;
    return TypeEnum.Error;
  }, [value]);
  const testDelay = useTestDelay();

  return loading ? (
    <Icon
      name={IconNameEnum.Loading}
      className={classNames(className, styles.loading)}
    />
  ) : (
    <span
      className={classNames(className, styles[type])}
      onClick={() => {
        testDelay(id);
      }}
    >
      {type === TypeEnum.Error ? "timeout" : `${value}ms`}
    </span>
  );
}
