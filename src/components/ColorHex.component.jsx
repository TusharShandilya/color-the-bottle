import React, { useState } from "react";
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

const ColorHex = ({ choice, deleteChoice, revealChoice, lockChoice }) => {
  const [showTooltip, setTooltip] = useState(false)

  const copyHex = () => {
    setTooltip(true);
    setTimeout(() => setTooltip(false), 2000);
    let copyText = document.getElementById(`hexCodeInput-${choice.colorHex}`);

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

  };

  return (
    <div className={styles.colorHex} style={{ background: choice.colorHex }}>
      <div className={styles.icons}>
        <span className={styles.copyIcon} onClick={copyHex}>
          {showTooltip && <Tooltip direction="top">Hex Copied!</Tooltip>}
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
        value={choice.colorHex}
        id={`hexCodeInput-${choice.colorHex}`}
      />
    </div>
  );
};

export default ColorHex;
