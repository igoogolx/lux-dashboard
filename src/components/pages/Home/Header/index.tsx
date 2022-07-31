import * as React from "react";
import { useCallback, useEffect, useMemo } from "react";
import {
  Switch,
  Tooltip,
  MenuItemProps,
  Selector,
  notifier,
} from "@/components/Core";
import {
  getRules,
  getStatus,
  start,
  stop,
  updateSelectedRuleId,
} from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { selectedSlice } from "@/reducers/selected";
import { rulesSelectors, rulesSlice, RootState } from "@/reducers";
import { managerSlice } from "@/reducers/manager";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { Operation } from "@/components/pages/Home/Header/Operation";
import { AddingOptions } from "./AddingOptions";
import styles from "./index.module.css";

const DEFAULT_TOOLTIP_TIMEOUT = 1000;

export function Header(): JSX.Element {
  const { t } = useTranslation();
  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared
  );
  const isSwitchLoading = useSelector<RootState, boolean>(
    (state) => state.manager.isLoading
  );
  const isProxyValid = useSelector<RootState, boolean>((state) => {
    if (state.selected.proxy) {
      if (state.proxies.ids.includes(state.selected.proxy)) {
        return true;
      }
    }
    return false;
  });
  const dispatch = useDispatch();
  const rules = useSelector(rulesSelectors.selectAll);
  const selectedRuleId = useSelector<RootState, string>(
    (state) => state.selected.rule
  );

  useEffect(() => {
    getStatus().then((status) => {
      dispatch(
        managerSlice.actions.setIsStarted({ isStarted: status.isStarted })
      );
    });
    getRules().then((res) => {
      dispatch(rulesSlice.actions.received(res));
      dispatch(selectedSlice.actions.setRule({ id: res.selectedId }));
    });
  }, [dispatch]);

  const selectRule = useCallback(
    async (id: string) => {
      await updateSelectedRuleId({ id });
      dispatch(selectedSlice.actions.setRule({ id }));
    },
    [dispatch]
  );

  const ruleItems = useMemo<MenuItemProps[]>(() => {
    return rules.map((rule) => ({
      id: rule.id,
      content: rule.name,
    }));
  }, [rules]);

  const onSwitch = async () => {
    try {
      dispatch(managerSlice.actions.setIsLoading({ isLoading: true }));
      if (isStarted) {
        await stop();
      } else {
        await start();
      }
      dispatch(managerSlice.actions.setIsStarted({ isStarted: !isStarted }));
    } catch (e) {
      notifier.error((e as { message?: string }).message || "unknown error");
    } finally {
      dispatch(managerSlice.actions.setIsLoading({ isLoading: false }));
    }
  };

  const isSwitchDisabled = isSwitchLoading || !isProxyValid;

  return (
    <div className={styles.wrapper}>
      <Operation />
      <AddingOptions className={styles.addButton} />
      <Selector
        items={ruleItems}
        onChange={(id) => {
          selectRule(id as string);
        }}
        value={selectedRuleId}
        className={styles.rulesDropdown}
        disabled={isStarted}
      />
      <Tooltip
        content={t(TRANSLATION_KEY.SWITCH_DISABLE_TIP)}
        disabled={!isSwitchDisabled}
        timeout={DEFAULT_TOOLTIP_TIMEOUT}
      >
        <Switch
          checked={isStarted}
          onClick={onSwitch}
          disabled={isSwitchDisabled}
        />
      </Tooltip>
    </div>
  );
}
