import * as React from "react";
import { BaseProxy, updateSelectedProxyId } from "lux-js-sdk";
import { useDispatch, useSelector } from "react-redux";
import { selectedSlice } from "@/reducers/selected";
import { DelayInfo, delaysSelectors, RootState } from "@/reducers";
import { Dot, DotTypeEnum } from "@/components/Core";
import styles from "./index.module.css";
import { DelayTag } from "./DelayTag";
import { Operation } from "./Operation";

type ProxyCardProps = {
  proxy: BaseProxy;
};

export function ProxyCard(props: ProxyCardProps): JSX.Element {
  const { proxy } = props;
  const isSelected = useSelector<RootState, boolean>(
    (state) => state.selected.proxy === proxy.id
  );
  const delay = useSelector<RootState, DelayInfo | null>(
    (state) => delaysSelectors.selectById(state, proxy.id) || null
  );
  const dispatch = useDispatch();
  const handleClick = async () => {
    await updateSelectedProxyId({ id: proxy.id });
    dispatch(selectedSlice.actions.setProxy({ id: proxy.id }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionButton}>
        <Operation id={proxy.id} />
      </div>
      <div className={styles.content} onClick={handleClick}>
        <Dot
          type={isSelected ? DotTypeEnum.Enabled : DotTypeEnum.Disabled}
          className={styles.dot}
        />
        {delay && (
          <DelayTag
            id={proxy.id}
            value={delay.value || 0}
            className={styles.delayTag}
            loading={delay.loading}
          />
        )}
        <div className={styles.typeTag}>{proxy.type}</div>
        <div className={styles.info}>
          <div className={styles.name}>{proxy.name}</div>
          <div className={styles.target}>{`${proxy.server}:${proxy.port}`}</div>
        </div>
      </div>
    </div>
  );
}
