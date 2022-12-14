import React, { useMemo, useState } from "react";
import {
  Button,
  ButtonTypeEnum,
  Dropdown,
  Icon,
  IconNameEnum,
  IconSizeEnum,
  MenuItemProps,
  PlacementEnum,
  Tooltip,
} from "@/components/Core";
import { useSelector } from "react-redux";
import { proxiesSelectors, RootState } from "@/reducers";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import { useTestDelay } from "@/hooks";
import { BaseProxy } from "lux-js-sdk";
import { RuntimeDetailModal } from "../RuntimeDetailModal";
import styles from "./index.module.css";

type OperationProps = {
  className?: string;
};

enum OperationTypeEnum {
  RuntimeDetail = "0",
  TestDelay = "1",
}

export function Operation(props: OperationProps): JSX.Element {
  const { t } = useTranslation();
  const { className } = props;
  const [isRuntimeDetailOpen, setIsRuntimeDetailOpen] = useState(false);

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
      {isRuntimeDetailOpen && <RuntimeDetailModal close={closeRuntimeDetail} />}
      <Tooltip
        content={t(TRANSLATION_KEY.MORE)}
        placement={PlacementEnum.Bottom}
      >
        <Button
          className={classNames(className, styles.button)}
          buttonType={ButtonTypeEnum.Secondary}
        >
          <Icon name={IconNameEnum.Ellipsis} size={IconSizeEnum.Normal} />
        </Button>
      </Tooltip>
    </Dropdown>
  );
}
