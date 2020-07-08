import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ head, body, footer, toggle }) => {
  return (
    <div className={styles.modal}>
      <section className={styles.main}>
        {head && <div className={styles.head}>{head}</div>}
        {body && <div className={styles.body}>{body}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </section>
    </div>
  );
};

export default Modal;
