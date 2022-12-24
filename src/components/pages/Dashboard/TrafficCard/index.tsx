import * as React from "react";
import { TrafficItem } from "lux-js-sdk";
import { Icon, IconNameEnum, IconSizeEnum, Tooltip } from "@/components/Core";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { FlowText, FlowTextTypeEnum } from "./FlowText";
import { SpeedGraph } from "../SpeedGraph";

export enum TrafficCardTypeEnum {
  Proxy,
  Direct,
}

const TITLE_MAP = {
  [TrafficCardTypeEnum.Proxy]: TRANSLATION_KEY.PROXY,
  [TrafficCardTypeEnum.Direct]: TRANSLATION_KEY.DIRECT,
};

type TrafficCardProps = {
  type: TrafficCardTypeEnum;
  speed: TrafficItem[];
  total: TrafficItem;
};

export function TrafficCard(props: TrafficCardProps): JSX.Element {
  const { speed, total, type } = props;
  const current = speed.length
    ? speed[speed.length - 1]
    : { upload: 0, download: 0 };

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Tooltip content={t(TITLE_MAP[type])}>
              <Icon
                name={
                  type === TrafficCardTypeEnum.Proxy
                    ? IconNameEnum.Plane
                    : IconNameEnum.ToTop
                }
                size={IconSizeEnum.Large}
              />
            </Tooltip>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.title}>
              Speed
              <Icon name={IconNameEnum.Flash} />
            </div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <Icon name={IconNameEnum.ArrowUp} />
                <FlowText value={current.upload} />
              </div>
              <div className={styles.detail}>
                <Icon name={IconNameEnum.ArrowDown} />
                <FlowText value={current.download} />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              Total
              <Icon name={IconNameEnum.Database} />
            </div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <Icon name={IconNameEnum.ArrowUp} />
                <FlowText value={total.upload} type={FlowTextTypeEnum.Total} />
              </div>
              <div className={styles.detail}>
                <Icon name={IconNameEnum.ArrowDown} />
                <FlowText
                  value={total.download}
                  type={FlowTextTypeEnum.Total}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.graph}>
        <SpeedGraph data={speed} />
      </div>
    </div>
  );
}
