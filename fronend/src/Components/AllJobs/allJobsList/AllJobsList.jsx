import React, { useState } from "react";
import styles from "./allJobsList.module.css";
import ArrowDown from "../../../icons/ArrowDown";
import JobCard from "../jobCard/JobCard";

function AllJobsList() {
  const [jobs, setJobs] = useState([{ d: "S" }]);
  console.log(jobs);
  return (
    <div>
      <section className={styles.jobListCategories}>
        <div className={styles.companyCategory}></div>
        <div className={styles.jobCategory}>משרה ותיאור</div>
        <div className={styles.professionCategory}>מקצוע</div>
        <div className={styles.submitedCategory}>הוגשו</div>
        <div className={styles.statusCategory}>סטטוס</div>
        <div className={styles.dateCategory}>
          תאריך
          <ArrowDown />
        </div>
        <div className={styles.editCategory}>עריכה</div>
      </section>
      <div>
        {" "}
        {jobs.map(() => {
          return <JobCard />;
        })}
      </div>
    </div>
  );
}

export default AllJobsList;
