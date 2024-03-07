import React from "react";
import styles from "./StudentListCard.module.css";

function StudentListCard() {
  return (
    <>
      <div className={styles.container}>
        <img id={styles.profileImg} src="" alt="" />
        <p id={styles.name}>טל כהן</p>
        <p id={styles.profession}>Software developer</p>
        <p id={styles.position}>Lead It Assent Management</p>
        <p id={styles.status}>בתהליך</p>
        <p id={styles.message}>הודעה</p>
      </div>
    </>
  );
}

export default StudentListCard;
