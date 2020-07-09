import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCopy,
  faEye,
  faLockOpen,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ColorHex.module.scss";
import Tooltip from "./Tooltip.component";

const ColorHex = ({ choice, deleteChoice, revealChoice, lockChoice, handleHexChange }) => {
  const [showTooltip, setTooltip] = useState(false);
  const [hexInput, setHexInput] = useState(choice.colorHex);

  useEffect(() => {
    if (choice.colorHex !== hexInput) {
      setHexInput(choice.colorHex)
    }    
  }, [choice])

  const copyHex = () => {
    setTooltip(true);
    setTimeout(() => setTooltip(false), 1000);
    let copyText = document.getElementById(`hexCodeInput-${choice.colorHex}`);

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

  };

  const handleHexChangeLocal = (e) => {
    if(e.target.value.slice(0,1) === "#") {
      setHexInput(`${e.target.value}`)
    } 
  }

  return (
    <div className={styles.colorHex} style={{ background: hexInput }}>
      <div className={styles.icons}>
        <span className={styles.copyIcon} onClick={copyHex}>
          {showTooltip && <Tooltip direction="bottom">Hex Copied!</Tooltip>}
          <FontAwesomeIcon icon={faCopy} />
        </span>
        <span className={styles.revealIcon} onClick={revealChoice}>
          <FontAwesomeIcon icon={faEye} />
        </span>
        <span className={styles.deleteIcon} onClick={deleteChoice}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
        <span className={styles.lockIcon} onClick={lockChoice}>
          <FontAwesomeIcon icon={choice.changeAllowed ? faLockOpen : faLock} />
        </span>
      </div>
      <input
        className={styles.hexValue}
        value={hexInput}
        id={`hexCodeInput-${choice.colorHex}`}
        name="hexInput"
        onChange={handleHexChangeLocal}
        maxLength="7"
      />
    </div>
  );
};

export default ColorHex;
