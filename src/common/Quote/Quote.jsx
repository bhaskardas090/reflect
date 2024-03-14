import React from "react";
import styles from "./Quote.module.css";

function Quote({ children }) {
  return (
    <div className={styles.quoteContainer}>
      <p>{children}</p>
    </div>
  );
}

export default Quote;
