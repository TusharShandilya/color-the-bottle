import React from "react";

import styles from "./ColorHex.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCopy,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const ColorHex = ({ children, deleteChoice }) => {
  const randomHexCode = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  const colorHexValue = randomHexCode();

  const copyHex = () => {
    var copyText = document.getElementById(`hexCodeInput-${colorHexValue}`);
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
  };
  
  return (
    <div
      className={styles.colorHex}
      style={{ background: colorHexValue }}
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
      <input className={styles.hexValue} value={colorHexValue} id={`hexCodeInput-${colorHexValue}`}/>
    </div>
  );
};

export default ColorHex;
