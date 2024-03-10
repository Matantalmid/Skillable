import React from "react";
import styles from "./StudentListCard.module.css";

function StudentListCard(props) {
  const { job } = props;
  return (
    <>
      {job.appliedStudents.map((student) => {
        return (
          <div className={styles.container}>
            <div id={styles.profileImgContainer}>
              <img id={styles.profileImg} src={student.coverImg} alt="" />
            </div>
            <h4 id={styles.name}>{student.firstName}</h4>
            <p id={styles.profession}>{student.profession}</p>
            <p id={styles.position}>{job.name}</p>
            <p id={styles.status}>{student.recruitmentStatus}</p>
            <p id={styles.message}>הודעה</p>
          </div>
        );
      })}
    </>
  );
}

export default StudentListCard;
