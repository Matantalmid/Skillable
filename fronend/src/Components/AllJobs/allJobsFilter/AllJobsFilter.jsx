import React from "react";
import styles from "./allJobsFilter.module.css";
import AddJobIcon from "../../../icons/AddJob";
import { useNavigate } from "react-router-dom";
import CreateJobPage from "../../../Pages/SingleJob/createSingleJob";

function AllJobsFilter({ filter, setFilter }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/CreateJobPage");
  };

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
          }}
        >
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
          }}
        >
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
          }}
        >
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
          }}
        >
          הודחו (1)
        </button>
      </div>
      <button className={styles.newJobBtn} onClick={handleNavigate}>
        יש לי משרה חדשה <AddJobIcon color="white" />
      </button>
    </section>
  );
}

export default AllJobsFilter;
