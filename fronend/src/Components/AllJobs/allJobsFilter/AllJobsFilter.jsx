import React from "react";
import styles from "./allJobsFilter.module.css";
import AddJob from "../../../icons/AddJob";
function AllJobsFilter({ filter, setFilter }) {
  return (
    <section className={styles.allJobsFiter}>
      <div className={styles.jobsFilterBtncontainer}>
        <button
          className={
            filter === "פתוחות"
              ? `${styles.chosenFilter} ${styles.jobFilterBtn}`
              : styles.jobFilterBtn
          }
          onClick={() => {
            setFilter("פתוחות");
          }}>
          פתוחות (1)
        </button>
        <button
          className={
            filter === "טיוטות"
              ? `${styles.chosenFilter} ${styles.jobFilterBtn}`
              : styles.jobFilterBtn
          }
          onClick={() => {
            setFilter("טיוטות");
          }}>
          טיוטות (1)
        </button>
        <button
          className={
            filter === "סגורות"
              ? `${styles.chosenFilter} ${styles.jobFilterBtn}`
              : styles.jobFilterBtn
          }
          onClick={() => {
            setFilter("סגורות");
          }}>
          סגורות (1)
        </button>
        <button
          className={
            filter === "הודחו"
              ? `${styles.chosenFilter} ${styles.jobFilterBtn}`
              : styles.jobFilterBtn
          }
          onClick={() => {
            setFilter("הודחו");
          }}>
          הודחו (1)
        </button>
      </div>
      <button className={styles.newJobBtn}>
        יש לי משרה חדשה {<AddJob color={"white"} />}
      </button>
    </section>
  );
}

export default AllJobsFilter;
