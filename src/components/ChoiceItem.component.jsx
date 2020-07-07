import React from "react";

const ChoiceItem = ({ choice, deleteChoice }) => {
  return (
    <div className="choiceItem">
      <span>{choice.text}</span>
      <span onClick={() => deleteChoice(choice)}>&#10005;</span>
    </div>
  );
};


export default ChoiceItem;