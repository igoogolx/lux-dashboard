import React, { useState } from "react";
import { Button, Input, Modal } from "@/components/Core";
import { ConnRuleEnum, testRule } from "lux-js-sdk";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";
import RuleTag from "@/components/pages/Connections/RuleTag";
import styles from "./index.module.css";

type TestRuleModalProps = {
  close: () => void;
};

function TestRuleModal(props: TestRuleModalProps) {
  const { close } = props;
  const { t } = useTranslation();
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState<ConnRuleEnum | null>(null);
  const handleTest = () => {
    testRule({ destination }).then((res) => {
      setResult(res.rule);
    });
  };
  return (
    <Modal close={close}>
      <div className={styles.search}>
        <Input
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
          className={styles.input}
        />
        <Button onClick={handleTest}>{t(TRANSLATION_KEY.SEARCH)}</Button>
      </div>
      <div className={styles.result}>
        <div className={styles.title}>Result:</div>
        {result !== null && <RuleTag value={result} />}
      </div>
    </Modal>
  );
}

export default TestRuleModal;
