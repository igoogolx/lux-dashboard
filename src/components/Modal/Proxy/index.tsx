import React from "react";
import { ProxyTypeEnum, Shadowsocks, Socks5 } from "lux-js-sdk";
import { EditSocks5Modal } from "./EditSocks5Modal";
import { EditShadowsocksModal } from "./EditShadowsocksModal";

type EditModalProps = {
  close: () => void;
  type: ProxyTypeEnum;
  initialValue?: Shadowsocks | Socks5;
  isSelected?: boolean;
};

export function EditModal(props: EditModalProps) {
  const { type, close, initialValue, isSelected = false } = props;
  switch (type) {
    case ProxyTypeEnum.Shadowsocks:
      return (
        <EditShadowsocksModal
          close={close}
          initialValue={initialValue as Shadowsocks}
          isSelected={isSelected}
        />
      );
    case ProxyTypeEnum.Socks5:
      return (
        <EditSocks5Modal
          close={close}
          initialValue={initialValue as Socks5}
          isSelected={isSelected}
        />
      );
    default: {
      throw new Error(`invalid ${type}`);
    }
  }
}
