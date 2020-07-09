import React, { useState } from "react";

import ChoiceList from "./components/ChoiceList.component";
import ChoiceSubmitForm from "./components/ChoiceSubmitForm.component";
import CustomButton from "./components/CustomButton.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import Navbar from "./components/Navbar.component";

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

//   return array;
// };

const App = () => {
  const [choiceArray, updateChoiceArray] = useState([]);
  const [choicesHidden, updateChoicesHidden] = useState(false);

  const randomHexCode = () => {
    // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    console.log(randomColor);
      
    return randomColor;
    
  };

  const choiceSubmit = (text) => {
    updateChoiceArray([
      {
        text,
        colorHex: randomHexCode(),
        changeAllowed: true,
      },
      ...choiceArray
    ]);
  };

  const randomizeChoices = () => {
    let array = choiceArray;

    array = array.map((choice) => {
      if (choice.changeAllowed){
        return {
          ...choice,
          colorHex: randomHexCode(),
        };
    } else {
      return choice;
    }
  });

    // updateChoiceArray(shuffleArray(array));
    updateChoiceArray(array);
  };

  const deleteChoice = (valueObject) => {
    let choices = choiceArray;
    choices = choices.filter((choice) => choice !== valueObject);
    updateChoiceArray(choices);

    !choices.length && updateChoicesHidden(false);
  };

  const lockChoice = (valueObject) => {
    let choices = choiceArray;
    choices = choices.map((choice) => {
      if (choice === valueObject) {
        choice.changeAllowed = !choice.changeAllowed;
      }
      return choice;
    });
    updateChoiceArray(choices);
  };

  // const hideChoices = () => {
  //   updateChoiceArray(shuffleArray(choiceArray));
  //   updateChoicesHidden(!choicesHidden);
  // };

  const handleHexChange = (colorChoice, hex) => {
    // let array = choiceArray;

    // array = array.map(choice => {
    //   if(choice === colorChoice) {
    //     return {
    //       ...choice,
    //       colorHex: hex
    //     }
    //   }

    //   return choice;
    // })

    // updateChoiceArray(array)
  }

  return (
    <div className="app">
      <Navbar />
      {!choicesHidden && <ChoiceSubmitForm choiceSubmit={choiceSubmit} />}
      <ChoiceList
        choiceArray={choiceArray}
        deleteChoice={deleteChoice}
        choicesHidden={choicesHidden}
        lockChoice={lockChoice}
        handleHexChange={handleHexChange}
      />
      <div className="box">
        {choiceArray.length ? (
          <CustomButton pop onClick={randomizeChoices}>
                <FontAwesomeIcon icon={faDice} /> Shuffle{" "}
          </CustomButton>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
};

export default App;
