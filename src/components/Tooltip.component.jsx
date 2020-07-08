import React from "react";

import styles from "./Tooltip.module.scss";

const Tooltip = ({ children, direction }) => {

  tooltipStyle = {}

  return <div className={styles.tooltip} styles={tooltipStyle}>{children}</div>;
};

export default Tooltip;
