import React from "react";
import styles from "./StudentFilter.module.css";

function StudentFilter({ filter, setFilter }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <button
          className={
            filter === "בתהליך"
              ? `${styles.chosenFilter} ${styles.filterBtn}`
              : styles.filterBtn
          }
          onClick={() => {
            setFilter("בתהליך");
          }}
        >
          בתהליך
        </button>
        <button
          className={
            filter === "התקבלו"
              ? `${styles.chosenFilter} ${styles.filterBtn}`
              : styles.filterBtn
          }
          onClick={() => {
            setFilter("התקבלו");
          }}
        >
          התקבלו
        </button>
      </div>
      <select name="" id="">
        <option value="allJobs">כל המשרות</option>
        <option value="FullStack">FullStack</option>
        <option value="QA">QA</option>
        <option value="DataAnalist">Data analist</option>
      </select>
    </div>
  );
}

export default StudentFilter;
