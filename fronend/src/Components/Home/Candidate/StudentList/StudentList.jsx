import React from "react";
import StudentListCard from "../StudentListCard/StudentListCard";
import styles from "./StudentList.module.css";
function StudentLIst() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <p id={styles.profileImg}></p>
          <p id={styles.name}>שם</p>
          <p id={styles.profession}>מקצוע</p>
          <p id={styles.position}>המשרה</p>
          <p id={styles.status}>סטטוס</p>
          <p id={styles.message}>הודעה</p>
        </div>
        <div className={styles.containerTwo}>
          <StudentListCard />
        </div>
      </div>
    </>
  );
}

export default StudentLIst;
