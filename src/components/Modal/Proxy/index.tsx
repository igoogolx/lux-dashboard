import React from "react";
import { Http, Proxy, ProxyTypeEnum, Shadowsocks, Socks5 } from "lux-js-sdk";
import { EditHttpModal } from "@/components/Modal/Proxy/EditHttpModal";
import { EditSocks5Modal } from "./EditSocks5Modal";
import { EditShadowsocksModal } from "./EditShadowsocksModal";

type EditModalProps = {
  close: () => void;
  type: ProxyTypeEnum;
  initialValue?: Proxy;
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
    case ProxyTypeEnum.Http:
      return (
        <EditHttpModal
          close={close}
          initialValue={initialValue as Http}
          isSelected={isSelected}
        />
      );
    default: {
      throw new Error(`invalid ${type}`);
    }
  }
}
