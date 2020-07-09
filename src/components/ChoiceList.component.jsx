import React, { Fragment, useState } from "react";

import ColorHex from "./ColorHex.component";
import styles from "./ChoiceList.module.scss";
import Modal from "./Modal.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ChoiceList = ({
  choiceArray,
  deleteChoice,
  lockChoice
}) => {
  const [showModal, setShowModal] = useState(false);
  const [userChoice, setUserChoice] = useState("");

  const revealChoice = (choice) => {
    setShowModal(!showModal);
    setUserChoice(choice.text);
  };

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
};

export default ChoiceList;
