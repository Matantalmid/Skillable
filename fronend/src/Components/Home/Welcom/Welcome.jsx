import React from "react";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.headline}>היי משתמש, ערב טוב</h1>
        <div className={styles.pContainer}>
          <p>
            שמחים שחזרת! המקום למצוא את הטאלנטים הטובים ביותר, משרה שתתפרסם כאן
            תאוייש במהרה
          </p>
          <p>אז לנו נשאר לאחל בהצלחה</p>
        </div>
        <button className={styles.btn}>יש לי משרה חדשה</button>
      </div>
    </>
  );
}

export default Welcome;
