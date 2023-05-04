import React, { useState } from "react";
import { Obfs, PluginTypeEnum, Shadowsocks, V2rayObfs } from "lux-js-sdk";
import { Modal } from "@/components/Core";
import { Card, Dropdown, Option, Text } from "@fluentui/react-components";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTranslation } from "react-i18next";
import { EditObfsPlugin } from "@/components/Modal/Proxy/Plugin/Obfs";
import { EditV2rayPlugin } from "@/components/Modal/Proxy/Plugin/V2ray";
import styles from "./index.module.css";

type EditPluginProps = {
  close: () => void;
  type?: PluginTypeEnum;
  initialValue?: Pick<Shadowsocks, "plugin" | "plugin-opts">;
  onSave: (data: Obfs | V2rayObfs) => void;
};

export function EditPlugin(props: EditPluginProps) {
  const { type = PluginTypeEnum.Obfs, close, initialValue, onSave } = props;
  let content = null;

  const typeOption = {
    [PluginTypeEnum.Obfs]: "Obfs",
    [PluginTypeEnum.V2ray]: "v2ray-plugin",
  };

  const [currentType, setCurrentType] = useState(type);

  const { t } = useTranslation();

  switch (currentType) {
    case PluginTypeEnum.Obfs:
      content = (
        <EditObfsPlugin
          close={close}
          initialValue={initialValue as Obfs}
          onChange={onSave}
        />
      );
      break;
    case PluginTypeEnum.V2ray:
      content = (
        <EditV2rayPlugin
          close={close}
          initialValue={initialValue as V2rayObfs}
          onChange={onSave}
        />
      );
      break;
    default: {
      throw new Error(`invalid ${type}`);
    }
  }
  return (
    <Modal close={close} hideCloseButton hideOkButton>
      <Card className={styles.type}>
        <Text>{t(TRANSLATION_KEY.TYPE)}</Text>
        <Dropdown
          defaultValue={typeOption[currentType]}
          onOptionSelect={(e, data) => {
            setCurrentType(data.optionValue as PluginTypeEnum);
          }}
        >
          {Object.keys(typeOption).map((key: string) => (
            <Option
              key={key}
              text={typeOption[key as PluginTypeEnum]}
              value={key}
            >
              {typeOption[key as PluginTypeEnum]}
            </Option>
          ))}
        </Dropdown>
      </Card>
      {content}
    </Modal>
  );
}
