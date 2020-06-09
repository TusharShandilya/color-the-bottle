import React from 'react'


const ColorHex = ({children, deleteChoice, hex}) => {


  return <div className={`color-hex`} style={{color: hex}}>
  <span>{children}</span>
  <i onClick={deleteChoice}>&#10005;</i>
  </div>
}

export default ColorHex;