import React, { useState } from "react";
import { Button, ButtonTypeEnum } from "../Button";
import { Icon, IconNameEnum } from "../Icon";
import { Field, FieldProps } from "./Field";

type PasswordFiledProps<T extends string> = Omit<FieldProps<T>, "type">;

export function PasswordFiled<T extends string>(props: PasswordFiledProps<T>) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Field
      type={isShowPassword ? "text" : "password"}
      adornment={
        <Button
          onClick={() => setIsShowPassword(!isShowPassword)}
          buttonType={ButtonTypeEnum.Blank}
        >
          <Icon
            name={isShowPassword ? IconNameEnum.EyeClose : IconNameEnum.Eye}
          />
        </Button>
      }
      {...props}
    />
  );
}
