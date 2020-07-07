import React, { Fragment } from "react";

import ChoiceItem from "./ChoiceItem.component";
import ColorHex from "./ColorHex.component";

import styles from "./ChoiceList.module.scss";

const ChoiceList = ({ choiceArray, deleteChoice, choicesHidden }) => {
  return !choicesHidden ? (
    <div className={styles.choiceList}>
      {choiceArray.map((choice) => (
        <ChoiceItem deleteChoice={deleteChoice} choice={choice} />
      ))}
    </div>
  ) : (
    <Fragment>

      <h2>Click to choose!</h2>
    <div className={`${styles.choiceList} ${styles.colorHexList}`}>
      <div className={`${styles.colorHexReveal} ${choiceArray.length <= 3 && styles.colorHexRevealLess }`}>
        {choiceArray.map((choice) => (
          <ColorHex deleteChoice={() => deleteChoice(choice)}>
            {choice.text}
          </ColorHex>
        ))}
      </div>
    </div>
    </Fragment>
  );
};

export default ChoiceList;
