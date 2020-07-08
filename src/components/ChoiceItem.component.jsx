import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./ChoiceItem.module.scss";

const ChoiceItem = ({ choice, deleteChoice }) => {
  return (
    <div className={styles.choiceItem}>
      <span className={styles.choiceIcon} onClick={() => deleteChoice(choice)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
      <span className={styles.choiceText}>{choice.text}</span>
    </div>
  );
};

export default ChoiceItem;
