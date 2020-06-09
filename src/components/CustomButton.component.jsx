import React, { Children } from 'react'

const CustomButton = ({children, onClick, type, colorType}) => {
  return <button onClick={onClick} type={type} className={`btn ${colorType}`}>{children}</button>
}


export default CustomButton;