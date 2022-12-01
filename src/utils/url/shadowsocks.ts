import {
  SIP002_URI,
  SHADOWSOCKS_URI,
  Config,
  makeConfig,
} from "shadowsocksconfig";
import { Shadowsocks } from "lux-js-sdk";

export const convertPluginOptsStr = (opts: Record<string, string>) => {
  let plugin = "";
  Object.keys(opts).forEach((key) => {
    const nextArg = `${key}=${opts[key]}`;
    if (plugin) {
      plugin = `${plugin};${nextArg}`;
    } else {
      plugin = nextArg;
    }
  });
  return plugin;
};

export const parsePluginOptsStr = (optsStr: string) => {
  const opts: Record<string, string> = {};
  optsStr.split(";").forEach((pair) => {
    const values = pair.split("=");
    if (values.length === 2) {
      const [key, value] = values;
      if (key === "obfs") {
        opts.mode = value;
      } else if (key === "obfs-host") {
        opts.host = value;
      } else {
        opts[key] = value;
      }
    }
  });

  return opts;
};

const convertConfig = (rawConfig: Config) => {
  const result: Shadowsocks = {
    id: "",
    name: rawConfig.tag.data,
    server: rawConfig.host.data,
    port: rawConfig.port.data,
    method: rawConfig.method.data,
    password: rawConfig.password.data,
    udp: true,
  };

  const pluginStr = rawConfig.extra.plugin;
  if (pluginStr) {
    const separatorIndex = pluginStr.indexOf(";");
    result.plugin = pluginStr.substring(0, separatorIndex);
    if (result.plugin.includes("obfs")) {
      result.plugin = "obfs";
    }
    result.pluginOpts = parsePluginOptsStr(
      pluginStr.substring(separatorIndex + 1)
    );
  }
  return result;
};

export const decode = (url: string) => {
  const serverUrls = url.split(/[\n\r ]/);
  return serverUrls.map((serverUrl) => {
    const rawConfig = SHADOWSOCKS_URI.parse(serverUrl);
    return convertConfig(rawConfig);
  });
};

export const encode = (config: Shadowsocks) => {
  let pluginStr = `${config.plugin}`;
  if (config.pluginOpts) {
    pluginStr = `${pluginStr};${convertPluginOptsStr(config.pluginOpts)}`;
  }
  return SIP002_URI.stringify(
    makeConfig({
      host: config.server,
      port: config.port,
      method: config.method,
      password: config.password,
      tag: config.name,
      plugin: pluginStr,
    })
  );
};
