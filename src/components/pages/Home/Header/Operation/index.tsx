import React, { useMemo, useState } from "react";
import { MenuItemProps } from "@/components/Core";
import { useDispatch, useSelector } from "react-redux";
import {
  proxiesSelectors,
  proxiesSlice,
  RootState,
  selectedSlice,
} from "@/reducers";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTestDelay } from "@/hooks";
import { BaseProxy, deleteAllProxies } from "lux-js-sdk";
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tooltip,
} from "@fluentui/react-components";
import { DeleteAllProxiesConfirmModal } from "@/components/Modal/DeleteAllProxiesConfirmModal";
import { RuntimeDetailModal } from "@/components/Modal/RuntimeDetailModal";
import { MoreHorizontalFilled } from "@fluentui/react-icons";

enum OperationTypeEnum {
  RuntimeDetail = "0",
  TestDelay = "1",
  DeleteAllProxies = "2",
}

export function Operation(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isRuntimeDetailOpen, setIsRuntimeDetailOpen] = useState(false);
  const [isDeleteAllProxiesModalOpen, setIsDeleteAllProxiesModalOpen] =
    useState(false);

  const isStarted = useSelector<RootState, boolean>(
    (state) => state.manager.isStared
  );

  const testDelay = useTestDelay();
  const proxies = useSelector<RootState, BaseProxy[]>(
    proxiesSelectors.selectAll
  );
  const testDelays = () => {
    proxies.forEach((proxy) => {
      testDelay(proxy.id);
    });
  };

  const openRuntimeDetail = () => {
    setIsRuntimeDetailOpen(true);
  };

  const closeRuntimeDetail = () => {
    setIsRuntimeDetailOpen(false);
  };

  const openDeleteAllProxiesModal = () => {
    setIsDeleteAllProxiesModalOpen(true);
  };

  const closeDeleteAllProxiesModal = () => {
    setIsDeleteAllProxiesModalOpen(false);
  };

  const onDeleteAllProxies = async () => {
    await deleteAllProxies();
    dispatch(proxiesSlice.actions.deleteAll());
    dispatch(selectedSlice.actions.setProxy({ id: "" }));
    closeDeleteAllProxiesModal();
  };

  const menuItems: MenuItemProps[] = useMemo(() => {
    return [
      {
        id: OperationTypeEnum.TestDelay,
        content: t(TRANSLATION_KEY.CONNECTIVITY_TEST),
      },
      {
        id: OperationTypeEnum.RuntimeDetail,
        content: t(TRANSLATION_KEY.COMMON_RUNTIME_DETAIL),
        disabled: !isStarted,
      },
      {
        id: OperationTypeEnum.DeleteAllProxies,
        content: t(TRANSLATION_KEY.DELETE_ALL_PROXIES),
        disabled: isStarted,
        isDanger: true,
      },
    ];
  }, [isStarted, t]);
  const onSelect = (id: string) => {
    switch (id) {
      case OperationTypeEnum.TestDelay:
        testDelays();
        return;
      case OperationTypeEnum.RuntimeDetail: {
        openRuntimeDetail();
        return;
      }
      case OperationTypeEnum.DeleteAllProxies: {
        openDeleteAllProxiesModal();
        return;
      }
      default: {
        throw new Error(`invalid ${id}`);
      }
    }
  };

  return (
    <>
      {isDeleteAllProxiesModalOpen && (
        <DeleteAllProxiesConfirmModal
          onClose={closeDeleteAllProxiesModal}
          onConfirm={onDeleteAllProxies}
        />
      )}
      {isRuntimeDetailOpen && <RuntimeDetailModal close={closeRuntimeDetail} />}
      <Menu>
        <Tooltip content={t(TRANSLATION_KEY.MORE)} relationship="description">
          <MenuTrigger disableButtonEnhancement>
            <Button icon={<MoreHorizontalFilled />} />
          </MenuTrigger>
        </Tooltip>
        <MenuPopover>
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => {
                  onSelect(item.id as string);
                }}
              >
                {item.content}
              </MenuItem>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
}
