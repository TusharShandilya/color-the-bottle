import React from 'react'

import styles from "./CustomButton.module.scss";

const CustomButton = ({children, onClick, type, colorType, singleInput}) => {
  return <button onClick={onClick} type={type} className={`${styles.btn} ${singleInput && styles.singleInput}`}>{children}</button>
}


export default CustomButton;