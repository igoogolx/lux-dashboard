import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js";
import { delaysSlice } from "@/reducers/delay";
import { useDispatch } from "react-redux";
import { getProxyDelay, testProxyUdp } from "lux-js-sdk";
import { testUdpSlice } from "@/reducers/testUdp";
import { notifier } from "@/components/Core";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTranslation } from "react-i18next";

export const useChartJs = (
  initialConfiguration: ChartConfiguration
): [React.RefObject<HTMLCanvasElement>, Chart | undefined] => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const chart = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current && !chart.current) {
      const ctx = chartRef.current;
      if (ctx) {
        chart.current = new Chart(ctx, initialConfiguration);
      }
    }
  }, [initialConfiguration]);

  return [chartRef, chart.current];
};

export const useTestDelay = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (id: string) => {
      dispatch(
        delaysSlice.actions.updateOne({
          delay: { id, loading: true },
        })
      );
      try {
        const res = await getProxyDelay({ id });
        dispatch(
          delaysSlice.actions.updateOne({
            delay: { id, value: res.delay },
          })
        );
      } finally {
        dispatch(
          delaysSlice.actions.updateOne({
            delay: { id, loading: false },
          })
        );
      }
    },
    [dispatch]
  );
};

export const useTestUdp = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return useCallback(
    async (id: string) => {
      dispatch(
        testUdpSlice.actions.updateOne({
          data: { id, loading: true },
        })
      );
      try {
        const res = await testProxyUdp({ id });
        dispatch(
          testUdpSlice.actions.updateOne({
            data: { id, result: res.result },
          })
        );
        if (!res.result) {
          notifier.error(t(TRANSLATION_KEY.UDP_FAILED_NOTIFICATION));
        } else {
          notifier.success(t(TRANSLATION_KEY.UDP_OK_NOTIFICATION));
        }
      } catch (e) {
        dispatch(
          testUdpSlice.actions.updateOne({
            data: { id, result: false },
          })
        );
      } finally {
        dispatch(
          testUdpSlice.actions.updateOne({
            data: { id, loading: false },
          })
        );
      }
    },
    [dispatch, t]
  );
};

export const useOnMount = (fn: () => void) => {
  useEffect(fn, []); // eslint-disable-line
};

// https://usehooks.com/useLockBodyScroll/
export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}; // Empty array ensures effect is only run on mount and unmount
