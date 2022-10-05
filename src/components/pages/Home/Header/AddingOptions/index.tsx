import React, { useState } from "react";
import {
  Dropdown,
  Icon,
  IconNameEnum,
  IconSizeEnum,
  PlacementEnum,
  Tooltip,
} from "@/components/Core";
import { addProxy, ProxyTypeEnum } from "lux-js-sdk";
import { useDispatch } from "react-redux";
import { proxiesSlice } from "@/reducers";
import { EditModal } from "@/components/Modal";
import { decode } from "@/utils/url/shadowsocks";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import styles from "./index.module.css";

enum OperationTypeEnum {
  Shadowsocks,
  Socks5,
  Clipboard,
}

type AddingOptionsProps = {
  className?: string;
};

export function AddingOptions(props: AddingOptionsProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();
  const [currentAddingType, setCurrentAddingType] =
    useState<ProxyTypeEnum | null>(null);
  const dispatch = useDispatch();

  const closeAddingModal = () => {
    setCurrentAddingType(null);
  };

  const items = [
    {
      id: OperationTypeEnum.Shadowsocks,
      content: t(TRANSLATION_KEY.SHADOWSOCKS),
    },
    { id: OperationTypeEnum.Socks5, content: t(TRANSLATION_KEY.SOCKS5) },
    {
      id: OperationTypeEnum.Clipboard,
      content: t(TRANSLATION_KEY.CLIPBOARD_IMPORT),
    },
  ];

  const onSelect = async (id: OperationTypeEnum) => {
    switch (id) {
      case OperationTypeEnum.Shadowsocks:
        setCurrentAddingType(ProxyTypeEnum.Shadowsocks);
        break;
      case OperationTypeEnum.Socks5:
        setCurrentAddingType(ProxyTypeEnum.Socks5);
        break;
      case OperationTypeEnum.Clipboard: {
        const url = await navigator.clipboard.readText();
        const shadowsockses = decode(url);
        await Promise.all(
          shadowsockses.map(async (shadowsocks) => {
            const proxy = { ...shadowsocks, type: ProxyTypeEnum.Shadowsocks };
            const res = await addProxy({ proxy });
            dispatch(
              proxiesSlice.actions.addOne({ proxy: { ...proxy, id: res.id } })
            );
          })
        );
        break;
      }
      default: {
        throw new Error(`invalid ${id}`);
      }
    }
  };

  return (
    <div className={className}>
      {currentAddingType && (
        <EditModal close={closeAddingModal} type={currentAddingType} />
      )}
      <Dropdown
        items={items}
        onItemClick={(id) => {
          onSelect(id as OperationTypeEnum);
        }}
      >
        <Tooltip content="New Proxy" placement={PlacementEnum.Bottom}>
          <Icon
            name={IconNameEnum.Plus}
            size={IconSizeEnum.Medium}
            className={styles.addButton}
          />
        </Tooltip>
      </Dropdown>
    </div>
  );
}
