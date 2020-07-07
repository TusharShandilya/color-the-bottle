import React, { useState } from "react";

import ChoiceList from "./components/ChoiceList.component";
import ChoiceSubmitForm from "./components/ChoiceSubmitForm.component";
import CustomButton from "./components/CustomButton.component";

import "./App.scss";

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

  const choiceSubmit = (text) => {
    updateChoiceArray([
      ...choiceArray,
      {
        text,
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
      {!choicesHidden && <ChoiceSubmitForm choiceSubmit={choiceSubmit} />}
      <ChoiceList
        choiceArray={choiceArray}
        deleteChoice={deleteChoice}
        choicesHidden={choicesHidden}
      />
      <div className="box">
        {choiceArray.length ? (
          <CustomButton onClick={hideChoices}>
            {choicesHidden ? "Show Choices" : "Hide Choices"}
          </CustomButton>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
};

export default App;
