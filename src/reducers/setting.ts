import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingRes } from "lux-js-sdk";

const initialState: SettingRes = {
  defaultInterface: "",
  trueProxyServer: "",
  localServer: {
    http: { enabled: false, port: 0 },
  },
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting(state, action: PayloadAction<SettingRes>) {
      return action.payload;
    },
  },
});
