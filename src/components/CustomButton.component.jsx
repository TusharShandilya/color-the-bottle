import React from "react";

import styles from "./CustomButton.module.scss";

const CustomButton = ({ children, onClick, type, pop, singleInput }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${pop && styles.popin} ${singleInput && styles.singleInput}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
