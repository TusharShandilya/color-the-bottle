import React from "react";

const ChoiceItem = ({ choice, deleteChoice }) => {
  return (
    <div className="choice-item">
      <span>{choice.text}</span>
      <i onClick={() => deleteChoice(choice)}>&#10005;</i>
    </div>
  );
};


export default ChoiceItem;