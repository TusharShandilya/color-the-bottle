import React, { useState, Fragment } from "react";
import CustomButton from "./CustomButton.component";

const ChoiceSubmitForm = ({ choiceSubmit }) => {
  const [choice, updateChoice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (choice) {
      choiceSubmit(choice);
      updateChoice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Enter a possible choice here</label>
      <input
        type="text"
        name=""
        id=""
        value={choice}
        autoFocus
        onChange={(e) => updateChoice(e.target.value)}
      />
      <CustomButton type="submit" colorType="primary">
        Add Choice
      </CustomButton>
    </form>
  );
};

export default ChoiceSubmitForm;
