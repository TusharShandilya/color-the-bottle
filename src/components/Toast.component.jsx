import React from 'react';

import styles from "./Toast.module.scss";

const Toast = ({head, body, time}) => {
  
  return <div className="">
    {head && <div className={}>{head}</div>}
    {body && <div className={}>{body}</div>}
  </div>
}

export default Toast;
