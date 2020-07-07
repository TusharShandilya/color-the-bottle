import React from "react";

import styles from "./ColorHex.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
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
    alert(colorHexValue, "hex copied!");
  };

  const revealChoice = () => {
    console.log("Your choice: ", children);
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
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
      </div>
      <span className={styles.hexValue}>{colorHexValue}</span>
    </div>
  );
};

export default ColorHex;
