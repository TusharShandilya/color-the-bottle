import React, { Fragment, useState } from "react";

import ChoiceItem from "./ChoiceItem.component";
import ColorHex from "./ColorHex.component";
import styles from "./ChoiceList.module.scss";
import Modal from "./Modal.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faRedo } from "@fortawesome/free-solid-svg-icons";

const ChoiceList = ({
  choiceArray,
  deleteChoice,
  choicesHidden,
  lockChoice,
  randomizeChoices,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [userChoice, setUserChoice] = useState("");

  const revealChoice = (choice) => {
    setShowModal(!showModal);
    setUserChoice(choice.text);
  };
  // !choicesHidden ? (
  //   <div className={styles.choiceList}>
  //     {choiceArray.map((choice) => (
  //       <ChoiceItem deleteChoice={deleteChoice} choice={choice} />
  //     ))}
  //   </div>
  // ) : (

  return <Fragment>
      {showModal && (
        <Modal
          head={
            <Fragment>
              You choose...
              <span
                className={styles.icon}
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </Fragment>
          }
          body={<div className={styles.modalBody}>{userChoice}</div>}
        />
      )}
      <span className={styles.choiceHeading}>
        <h2>&nbsp;</h2>
        <span onClick={randomizeChoices} className={styles.redoIcon}>
          <FontAwesomeIcon icon={faRedo} />
        </span>
      </span>
      <div className={`${styles.choiceList} ${styles.colorHexList}`}>
        <div
          className={`${styles.colorHexReveal} ${
            choiceArray.length <= 3 && styles.colorHexRevealLess
          }`}
        >
          {choiceArray.map((choice) => (
            <ColorHex
              choice={choice}
              revealChoice={() => revealChoice(choice)}
              deleteChoice={() => deleteChoice(choice)}
              lockChoice={() => lockChoice(choice)}
            />
          ))}
        </div>
      </div>
    </Fragment>
      // );
};

export default ChoiceList;
