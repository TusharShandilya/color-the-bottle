import React, { useState } from "react";
import CustomButton from "./CustomButton.component";

import styles from "./ChoiceSubmitForm.module.scss";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Enter a possible choice here</label>
      <input
        type="text"
        name=""
        id=""
        value={choice}
        autoFocus
        onChange={(e) => updateChoice(e.target.value)}
      />
      <CustomButton singleInput type="submit" colorType="primary">
        Add Choice
      </CustomButton>
    </form>
  );
};

export default ChoiceSubmitForm;
