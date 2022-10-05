import React, { useEffect, useMemo, useState } from "react";
import {
  closeAllConnections,
  Conn,
  ConnNetworkMetaEnum,
  subscribeConnections,
} from "lux-js-sdk";
import { Column } from "react-table";
import { convertByte } from "@/utils/traffic";
import {
  Button,
  ButtonTypeEnum,
  Icon,
  IconNameEnum,
  IconSizeEnum,
  InputGroup,
  PlacementEnum,
  SelectorProps,
  Table,
  Tooltip,
} from "@/components/Core";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import TestRuleModal from "@/components/pages/Connections/TestRuleModal";
import RuleTag from "@/components/pages/Connections/RuleTag";
import { getPlatform } from "@/electronContext";
import styles from "./index.module.css";

enum SearchSelectorItemsEnum {
  Destination,
  Process,
  Domain,
}

function convertDuration(duration: number) {
  const secNum = duration / 1000; // don't forget the second param
  const hoursNum = Math.floor(secNum / 3600);
  const minutesNum = Math.floor((secNum - hoursNum * 3600) / 60);
  const secondsNum = Math.floor(secNum - hoursNum * 3600 - minutesNum * 60);

  let seconds = secondsNum.toString();
  let minutes = minutesNum.toString();
  let hours = hoursNum.toString();
  if (hoursNum < 10) {
    hours = `0${hoursNum}`;
  }
  if (minutesNum < 10) {
    minutes = `0${minutesNum}`;
  }
  if (secondsNum < 10) {
    seconds = `0${secondsNum}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

const getProcess = (name: string) => {
  const platform = getPlatform();
  let separator = "\\";
  if (platform === "win32") {
    separator = "\\";
  } else if (platform === "darwin") {
    separator = "/";
  }
  const paths = name.split(separator);
  return paths[paths.length - 1];
};

// TODO: move
function LoadTag({ value }: { value: number }): JSX.Element {
  const { value: convertedValue, unit } = convertByte(value);
  return <>{`${convertedValue} ${unit}`}</>;
}

function StartTag({ value }: { value: number }): JSX.Element {
  const duration = new Date().getTime() - value;
  return <>{convertDuration(duration)}</>;
}

export function Connections(): JSX.Element {
  const { t } = useTranslation();
  const [conns, setConns] = useState<Conn[]>([]);
  const [total, setTotal] = useState<{
    tcp: number;
    udp: number;
    history: number[];
  }>({ tcp: 0, udp: 0, history: [] });
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedSelectorValue, setSearchedSelectorValue] = useState(
    SearchSelectorItemsEnum.Process
  );
  const [isTestRuleModalOpen, setIsTestRuleModalOpen] = useState(false);

  useEffect(() => {
    const subscriber = subscribeConnections({
      onMessage: (m) => {
        setConns(m);
        setTotal((prev) => {
          return {
            tcp: m.filter(
              (conn) => conn.metadata.network === ConnNetworkMetaEnum.Tcp
            ).length,
            udp: m.filter(
              (conn) => conn.metadata.network === ConnNetworkMetaEnum.Udp
            ).length,
            history: [...prev.history, m.length],
          };
        });
      },
    });
    return () => {
      subscriber.close();
    };
  }, []);
  const columns = useMemo<
    (Column & { accessor: keyof typeof data[number] })[]
  >(() => {
    return [
      {
        Header: t(TRANSLATION_KEY.DESTINATION) || "",
        accessor: "destination",
        disableSortBy: true,
      },
      {
        Header: t(TRANSLATION_KEY.PROCESS) || "",
        accessor: "process",
        minWidth: 84,
      },
      { Header: t(TRANSLATION_KEY.Domain) || "", accessor: "domain" },
      {
        Header: t(TRANSLATION_KEY.RULE) || "",
        accessor: "rule",
        Cell: RuleTag,
      },
      { Header: t(TRANSLATION_KEY.NETWORK) || "", accessor: "network" },
      {
        Header: t(TRANSLATION_KEY.TIME) || "",
        accessor: "start",
        Cell: StartTag,
      },
      {
        Header: t(TRANSLATION_KEY.DOWNLOAD) || "",
        accessor: "download",
        Cell: LoadTag,
      },
      {
        Header: t(TRANSLATION_KEY.UPLOAD) || "",
        accessor: "upload",
        Cell: LoadTag,
      },
    ];
  }, [t]);
  const data = useMemo(() => {
    return conns
      .map((conn) => ({
        process: getProcess(conn.process),
        destination: `${conn.metadata.destinationIP}:${conn.metadata.destinationPort}`,
        domain: conn.domain,
        download: conn.download,
        upload: conn.upload,
        network: conn.metadata.network,
        rule: conn.rule,
        start: conn.start,
        id: conn.id,
      }))
      .filter((conn) => {
        if (searchedValue) {
          switch (searchedSelectorValue) {
            case SearchSelectorItemsEnum.Domain:
              return conn.domain
                .toLocaleLowerCase()
                .includes(searchedValue.toLocaleLowerCase());
            case SearchSelectorItemsEnum.Process:
              return conn.process
                .toLocaleLowerCase()
                .includes(searchedValue.toLocaleLowerCase());
            case SearchSelectorItemsEnum.Destination:
              return conn.destination
                .toLocaleLowerCase()
                .includes(searchedValue.toLocaleLowerCase());
            default: {
              throw new Error(`invalid ${searchedValue}`);
            }
          }
        }
        return true;
      });
  }, [conns, searchedSelectorValue, searchedValue]);

  const searchSelectorItems: SelectorProps["items"] = [
    {
      id: SearchSelectorItemsEnum.Destination,
      content: t(TRANSLATION_KEY.DESTINATION),
    },
    {
      id: SearchSelectorItemsEnum.Process,
      content: t(TRANSLATION_KEY.PROCESS),
    },
    {
      id: SearchSelectorItemsEnum.Domain,
      content: t(TRANSLATION_KEY.Domain),
    },
  ];

  return (
    <div className={styles.wrapper}>
      {isTestRuleModalOpen && (
        <TestRuleModal
          close={() => {
            setIsTestRuleModalOpen(false);
          }}
        />
      )}
      <div className={styles.toolbar}>
        <InputGroup
          selectorItems={searchSelectorItems}
          selectorValue={searchedSelectorValue}
          inputValue={searchedValue}
          onSelectorChange={
            setSearchedSelectorValue as SelectorProps["onChange"]
          }
          onInputChange={(e) => {
            setSearchedValue(e.target.value);
          }}
        />
        <div className={styles.actions}>
          <Button
            onClick={() => {
              setIsTestRuleModalOpen(true);
            }}
            buttonType={ButtonTypeEnum.Secondary}
          >
            Test Rule
          </Button>
          <Button
            onClick={closeAllConnections}
            buttonType={ButtonTypeEnum.Blank}
            className={styles.closeAll}
          >
            <Tooltip
              content={t(TRANSLATION_KEY.CLOSE_ALL)}
              placement={PlacementEnum.Bottom}
            >
              <Icon name={IconNameEnum.Trash} size={IconSizeEnum.Medium} />
            </Tooltip>
          </Button>
        </div>
      </div>
      <Table columns={columns} data={data} />
      <div className={styles.footer}>
        <div>{`Tcp:  ${total.tcp}`}</div>
        <div>{`Udp:  ${total.udp}`}</div>
      </div>
    </div>
  );
}
