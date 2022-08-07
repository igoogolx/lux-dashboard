import * as React from "react";
import { Nav } from "@/components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/components/pages/Home";
import { Dashboard } from "@/components/pages/Dashbord";
import { Connections } from "@/components/pages/Connections";
import { Logger } from "@/components/pages/Logger";
import {
  ConfirmModal,
  notifier,
  NotificationContainer,
} from "@/components/Core";
import { Setting } from "@/components/pages/Setting";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getIsAdmin, subscribePing, subscribeLog } from "lux-js-sdk";
import { loggerSlice } from "@/reducers/logger";
import { generalSlice } from "@/reducers/general";
import { ElevateModal } from "@/components/Modal/ElevateModal";
import axios from "axios";
import { About } from "@/components/pages/About";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import i18next from "i18next";
import WsClient from "isomorphic-ws";
import { delay } from "@/utils/delay";
import styles from "./index.module.css";

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    notifier.error(
      error.response?.data?.message || i18next.t(TRANSLATION_KEY.UNKNOWN_ERROR)
    );
    return Promise.reject(error);
  }
);

const RECONNECT_TIMEOUT = 1000;

export function App(): JSX.Element {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [connected, setConnected] = useState(true);
  const pingSubscriber = useRef<WsClient | null>(null);
  const hasDisconnected = useRef(false);

  const createPingSubscriber = useCallback(() => {
    pingSubscriber.current = subscribePing({
      onMessage: () => {
        if (hasDisconnected.current) {
          window.location.reload();
        }
        setConnected(true);
      },
      onClose: async () => {
        setConnected(false);
        hasDisconnected.current = true;
        await delay(RECONNECT_TIMEOUT);
        console.log("Trying to reconnect ping");
        createPingSubscriber();
      },
    });
  }, []);
  useEffect(() => {
    createPingSubscriber();
    const logSubscriber = subscribeLog({
      onMessage: (m) => {
        dispatch(loggerSlice.actions.pushLog(m));
      },
    });
    getIsAdmin().then((res) => {
      dispatch(generalSlice.actions.setIsAdmin({ isAdmin: res.isAdmin }));
    });
    return () => {
      logSubscriber.close();
      if (pingSubscriber.current) {
        pingSubscriber.current.close();
      }
    };
  }, [createPingSubscriber, dispatch]);
  return (
    <div className={styles.wrapper}>
      <NotificationContainer />
      {!connected && (
        <ConfirmModal
          title={t(TRANSLATION_KEY.WARNING)}
          content={t(TRANSLATION_KEY.DISCONNECTED_WARN_TIP)}
          onCancel={() => {
            window.location.reload();
          }}
          confirmText={t(TRANSLATION_KEY.RELOAD)}
          onConfirm={() => {
            window.location.reload();
          }}
        />
      )}
      <div className={styles.header} />
      <ElevateModal />
      <div className={styles.body}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/logs" element={<Logger />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
