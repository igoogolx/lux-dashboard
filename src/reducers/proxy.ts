import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { BaseProxy } from "lux-js-sdk";

export const proxiesAdapter = createEntityAdapter<BaseProxy>();

export const proxiesSlice = createSlice({
  name: "proxies",
  initialState: proxiesAdapter.getInitialState(),
  reducers: {
    received(state, action: PayloadAction<{ proxies: BaseProxy[] }>) {
      proxiesAdapter.setAll(state, action.payload.proxies);
    },
    deleteOne(state, action: PayloadAction<{ id: string }>) {
      proxiesAdapter.removeOne(state, action.payload.id);
    },
    updateOne(state, action: PayloadAction<{ proxy: BaseProxy }>) {
      proxiesAdapter.updateOne(state, {
        id: action.payload.proxy.id,
        changes: action.payload.proxy,
      });
    },
    addOne(state, action: PayloadAction<{ proxy: BaseProxy }>) {
      proxiesAdapter.addOne(state, action.payload.proxy);
    },
  },
});
