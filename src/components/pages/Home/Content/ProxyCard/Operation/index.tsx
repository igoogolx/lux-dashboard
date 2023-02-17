import React, { useMemo, useState } from "react";
import {
  Button,
  ButtonTypeEnum,
  Dropdown,
  Icon,
  IconNameEnum,
  IconSizeEnum,
  MenuItemProps,
  notifier,
} from "@/components/Core";
import { useDispatch, useSelector } from "react-redux";
import { deleteProxy, ProxyTypeEnum, Shadowsocks } from "lux-js-sdk";
import { proxiesSelectors, proxiesSlice, RootState } from "@/reducers";
import { useTestDelay, useTestUdp } from "@/hooks";
import classNames from "classnames";
import { selectedSlice } from "@/reducers/selected";
import { EditModal } from "@/components/Modal/Proxy";
import { encode } from "@/utils/url/shadowsocks";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { QrCodeModal } from "@/components/Modal/QrCodeModal";
import styles from "./index.module.css";

type OperationProps = {
  id: string;
  className?: string;
};

enum OperationTypeEnum {
  Edit = "edit",
  Delete = "delete",
  CopyUrl = "copyUrl",
  Test = "test",
  QrCode = "qrCode",
  TestUdp = "testUdp",
}

export function Operation(props: OperationProps): JSX.Element {
  const { t } = useTranslation();
  const { id: proxyId, className } = props;
  const [isEditingDialogOpen, setIsEditingDialogOpen] = useState(false);
  const [isQrcodeModalOpen, setIsQrcodeModalOpen] = useState(false);
  const dispatch = useDispatch();
  const testDelay = useTestDelay();
  const testUdp = useTestUdp();
  const proxy = useSelector<RootState, Shadowsocks>(
    (state) => proxiesSelectors.selectById(state, proxyId) as Shadowsocks
  );
  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared
  );
  const isSwitchLoading = useSelector<RootState, boolean>(
    (state) => state.manager.isLoading
  );
  const isSelected = useSelector<RootState, boolean>(
    (state) => state.selected.proxy === proxyId
  );
  const menuItems: MenuItemProps[] = useMemo(() => {
    let items: MenuItemProps[] = [
      {
        id: OperationTypeEnum.Delete,
        content: t(TRANSLATION_KEY.COMMON_DELETE),
        iconName: IconNameEnum.Trash,
        disabled: (isStarted || isSwitchLoading) && isSelected,
        isDanger: true,
        isDivider: true,
      },
    ];
    if (
      ![
        ProxyTypeEnum.Shadowsocks,
        ProxyTypeEnum.Http,
        ProxyTypeEnum.Socks5,
      ].includes(proxy.type)
    ) {
      return items;
    }
    items = [
      {
        id: OperationTypeEnum.Edit,
        content: t(TRANSLATION_KEY.COMMON_EDIT),
        iconName: IconNameEnum.Edit,
      },
      {
        id: OperationTypeEnum.Test,
        content: t(TRANSLATION_KEY.CONNECTIVITY_TEST),
        iconName: IconNameEnum.Swap,
      },
      {
        id: OperationTypeEnum.TestUdp,
        content: t(TRANSLATION_KEY.COMMON_TEST_UDP),
        iconName: IconNameEnum.Sync,
      },
      ...items,
    ];
    if (proxy.type === ProxyTypeEnum.Shadowsocks) {
      items = [
        {
          id: OperationTypeEnum.CopyUrl,
          content: t(TRANSLATION_KEY.COMMON_COPY_URL),
          iconName: IconNameEnum.Copy,
        },
        {
          id: OperationTypeEnum.QrCode,
          content: t(TRANSLATION_KEY.COMMON_QR_CODE),
          iconName: IconNameEnum.QrCode,
        },
        ...items,
      ];
    }
    return items;
  }, [isSelected, isStarted, isSwitchLoading, proxy.type, t]);
  const onSelect = async (id: string) => {
    switch (id) {
      case OperationTypeEnum.Edit:
        setIsEditingDialogOpen(true);
        return;
      case OperationTypeEnum.Delete: {
        await deleteProxy({ id: proxy.id });
        dispatch(proxiesSlice.actions.deleteOne({ id: proxyId }));
        if (isSelected) {
          dispatch(selectedSlice.actions.setProxy({ id: "" }));
        }
        notifier.success(t(TRANSLATION_KEY.DELETED));
        return;
      }
      case OperationTypeEnum.Test: {
        await testDelay(proxyId);
        return;
      }
      case OperationTypeEnum.TestUdp: {
        await testUdp(proxyId);
        return;
      }
      case OperationTypeEnum.CopyUrl: {
        const url = encode(proxy);
        await navigator.clipboard.writeText(url);
        notifier.success(t(TRANSLATION_KEY.COPIED));
        return;
      }
      case OperationTypeEnum.QrCode: {
        setIsQrcodeModalOpen(true);
        return;
      }
      default: {
        throw new Error(`invalid ${id}`);
      }
    }
  };

  return (
    <Dropdown
      items={menuItems}
      onItemClick={(id) => {
        onSelect(id as string);
      }}
    >
      {isQrcodeModalOpen && (
        <QrCodeModal
          url={encode(proxy)}
          close={() => {
            setIsQrcodeModalOpen(false);
          }}
        />
      )}
      {isEditingDialogOpen && (
        <EditModal
          close={() => setIsEditingDialogOpen(false)}
          initialValue={proxy}
          type={proxy.type as ProxyTypeEnum}
          isSelected={isSelected}
        />
      )}
      <Button
        className={classNames(className, styles.button)}
        buttonType={ButtonTypeEnum.Blank}
      >
        <Icon name={IconNameEnum.Ellipsis} size={IconSizeEnum.Normal} />
      </Button>
    </Dropdown>
  );
}
