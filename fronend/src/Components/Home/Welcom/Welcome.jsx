import React from "react";
import styles from "./Welcome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import AddJob from "../../../icons/AddJob";

function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.headline}>היי משתמש, ערב טוב</h1>
        <div className={styles.pContainer}>
          <p>
            שמחים שחזרת! המקום למצוא את הטאלנטים הטובים ביותר, משרה שתתפרסם כאן
            תאוייש במהרה
            <br />
            <br />
            !אז לנו נשאר לאחל בהצלחה
          </p>
        </div>
        <button className={styles.btn}>
          יש לי משרה חדשה <AddJob />
        </button>
      </div>
    </>
  );
}

export default Welcome;
