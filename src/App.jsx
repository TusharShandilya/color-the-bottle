import React, { useState, Fragment } from "react";

import ChoiceList from "./components/ChoiceList.component";
import ChoiceSubmitForm from "./components/ChoiceSubmitForm.component";
import CustomButton from "./components/CustomButton.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import Navbar from "./components/Navbar.component";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const App = () => {
  const [choiceArray, updateChoiceArray] = useState([]);
  const [choicesHidden, updateChoicesHidden] = useState(false);

  const randomHexCode = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  const choiceSubmit = (text) => {
    updateChoiceArray([
      ...choiceArray,
      {
        text,
        colorHex: randomHexCode(),
        disabled: false,
      },
    ]);
  };

  const deleteChoice = (valueObject) => {
    let choices = choiceArray;
    choices = choices.filter((choice) => choice !== valueObject);
    updateChoiceArray(choices);

    !choices.length && updateChoicesHidden(false);
  };

  const hideChoices = () => {
    updateChoiceArray(shuffleArray(choiceArray));
    updateChoicesHidden(!choicesHidden);
  };

  return (
    <div className="app">
      <Navbar />
      {!choicesHidden && <ChoiceSubmitForm choiceSubmit={choiceSubmit} />}
      <ChoiceList
        choiceArray={choiceArray}
        deleteChoice={deleteChoice}
        choicesHidden={choicesHidden}
      />
      <div className="box">
        {choiceArray.length ? (
          <CustomButton onClick={hideChoices}>
            {choicesHidden ? (
              <Fragment>
                <FontAwesomeIcon icon={faEye} /> Show Choices{" "}
              </Fragment>
            ) : (
              <Fragment>
                <FontAwesomeIcon icon={faEyeSlash} />Hide Choices{" "}
              </Fragment>
            )}
          </CustomButton>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
};

export default App;
