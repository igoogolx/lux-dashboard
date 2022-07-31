import * as React from "react";
import { useEffect } from "react";
import { getProxies } from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { proxiesSelectors, proxiesSlice } from "@/reducers";
import { selectedSlice } from "@/reducers/selected";
import styles from "./index.module.css";
import { ProxyCard } from "./ProxyCard";

export function Content(): JSX.Element {
  const proxies = useSelector(proxiesSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    getProxies().then((data) => {
      dispatch(proxiesSlice.actions.received(data));
      dispatch(selectedSlice.actions.setProxy({ id: data.selectedId }));
    });
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      {proxies.map((proxy) => (
        <ProxyCard proxy={proxy} key={proxy.id} />
      ))}
    </div>
  );
}
