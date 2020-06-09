import React, { useState } from "react";

import ChoiceList from "./components/ChoiceList.component";
import ChoiceSubmitForm from "./components/ChoiceSubmitForm.component";
import CustomButton from "./components/CustomButton.component";

const randomHexCode = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

const App = () => {
  const [choiceArray, updateChoiceArray] = useState([]);
  const [choicesHidden, updateChoicesHidden] = useState(false);

  const choiceSubmit = (text) => {
    updateChoiceArray([
      ...choiceArray,
      {
        text,
        hex: randomHexCode(),
        disabled: false,
      },
    ]);
  };

  const deleteChoice = (valueObject) => {
    let choices = choiceArray;
    choices = choices.filter((choice) => choice !== valueObject);
    updateChoiceArray(choices);

    !choices.length && updateChoicesHidden(false)
  };

  const hideChoices = () => {
    updateChoicesHidden(!choicesHidden);
  };

  return (
    <div className="App">
      {!choicesHidden && <ChoiceSubmitForm choiceSubmit={choiceSubmit} />}
      <ChoiceList
        choiceArray={choiceArray}
        deleteChoice={deleteChoice}
        choicesHidden={choicesHidden}
      />
      {choiceArray.length ?<CustomButton onClick={hideChoices}>
        {choicesHidden ? "Show Choices" : "Hide Choices"}
      </CustomButton> : <p/>}
    </div>
  );
};

export default App;
