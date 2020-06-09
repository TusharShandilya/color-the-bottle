import React from 'react'


const ColorHex = ({children, deleteChoice}) => {
  const randomHexCode = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  return <div className={`color-hex`} style={{color: randomHexCode()}}>
  <span>{children}</span>
  <i onClick={deleteChoice}>&#10005;</i>
  </div>
}

export default ColorHex;