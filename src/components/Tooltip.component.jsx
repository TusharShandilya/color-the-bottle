import React from "react";

import styles from "./Tooltip.module.scss";
import { useState } from "react";

const Tooltip = ({ children, direction }) => {
  
  
  return (
    <div className={`${styles.tooltip} ${styles[direction]}`}>{children}</div>
  );
};

export default Tooltip;
