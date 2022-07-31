import React, { useEffect, useState } from "react";
import { getSetting, SettingRes } from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { settingSlice } from "@/reducers/setting";
import { RootState } from "@/reducers";
import { SettingForm } from "@/components/pages/Setting/Form";
import styles from "./index.module.css";

export function Setting() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getSetting()
      .then((data) => {
        dispatch(settingSlice.actions.setSetting(data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);
  const setting = useSelector<RootState, SettingRes>((state) => state.setting);

  return (
    <div className={styles.wrapper}>
      {!isLoading && <SettingForm initValue={setting} />}
    </div>
  );
}
