import React from "react";
import StudentListCard from "../StudentListCard/StudentListCard";
import styles from "./StudentList.module.css";
function StudentLIst() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <p>שם</p>
          <p>מקצוע</p>
          <p>המשרה</p>
          <p>סטטוס</p>
          <p>הודעה</p>
        </div>
        <div className={styles.containerTwo}>
          <StudentListCard />
        </div>
      </div>
    </>
  );
}

export default StudentLIst;
