import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCopy,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ColorHex.module.scss";

const ColorHex = ({ choice, deleteChoice, revealChoice }) => {

  const copyHex = () => {
    var copyText = document.getElementById(`hexCodeInput-${choice.colorHex}`);
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
  };

  return (
    <div
      className={styles.colorHex}
      style={{ background: choice.colorHex }}
    >
      <div className={styles.icons}>
        <span className={styles.copyIcon} onClick={copyHex}>
          <FontAwesomeIcon icon={faCopy} />
        </span>
        <span className={styles.revealIcon} onClick={revealChoice}>
          <FontAwesomeIcon icon={faEye} />
        </span>
        <span className={styles.deleteIcon} onClick={deleteChoice}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </div>
      <input className={styles.hexValue} value={choice.colorHex} id={`hexCodeInput-${choice.colorHex}`}/>
    </div>
  );
};

export default ColorHex;
