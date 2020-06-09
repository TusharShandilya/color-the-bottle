import React, { useState } from "react";
import ChoiceItem from "./ChoiceItem.component";
import ColorHex from "./ColorHex.component";

const ChoiceList = ({ choiceArray, deleteChoice, choicesHidden }) => {
  return !choicesHidden ? (
    <div className="choice-list">
      {choiceArray.map((choice) => (
        <ChoiceItem deleteChoice={deleteChoice} choice={choice}/>
      ))}
    </div>
  ) : (
    <div className="color-hex-reveal">
      {choiceArray.map((choice) => (
        <ColorHex deleteChoice={() => deleteChoice(choice)}>{choice.text}</ColorHex>
      ))}
    </div>
  );
};

export default ChoiceList;
