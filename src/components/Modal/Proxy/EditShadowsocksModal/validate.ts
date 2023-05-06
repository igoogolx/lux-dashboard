import * as Yup from "yup";
import { MAX_PORT, MIN_PORT } from "@/utils/validator";
import { ObfsModeEnum } from "lux-js-sdk";

export const validatePlugin = (value: string) => {
  if (!value) {
    return "";
  }
  if (value !== "obfs" && value !== "v2ray-plugin")
    return "only support obfs or v2ray-plugin";
  return "";
};

export const validatePluginOptsStr = (value: string) => {
  if (!value) {
    return "";
  }
  const opts = value.split(";");
  for (let i = 0; i < opts.length; i += 1) {
    const pair = opts[i].split("=");
    if (pair.length !== 2) {
      return "invalid opts";
    }
    if (pair.some((item) => item.length === 0)) {
      return "invalid opts";
    }
  }
  return "";
};

export const ShadowsocksSchema = Yup.object().shape({
  name: Yup.string(),
  server: Yup.string().required("Required"),
  port: Yup.number().min(MIN_PORT).max(MAX_PORT).required("Required"),
  password: Yup.string().required("Required"),
  method: Yup.string(),
});

export const ObfsPluginSchema = Yup.object().shape({
  host: Yup.string().required("Required"),
  mode: Yup.string()
    .matches(new RegExp(`(${ObfsModeEnum.Tls}|${ObfsModeEnum.Http})`))
    .required("Required"),
});
