import React from "react";
import styles from "./jobCard.module.css";
import EditBtn from "../../../icons/EditBtn";
function JobCard() {
  return (
    <div className={styles.jobCard}>
      <img className={styles.companyImg} src="" alt="companyImg" />
      <div className={styles.jobNameAndDesc}>
        <h4 className={styles.jobName}>Netsd sda angular</h4>
        <p className={styles.jobDesc}>
          לורם דגשצ חדשג שדגשדג שדג שדג ךלשדיגףשדלגיף שםדןיגףדש םןגי ףםןישדג
          גךלג מיבו ל
        </p>
      </div>
      <p className={styles.profession}>software developer</p>
      <h4 className={styles.amountSubmited}>15 מועמדים</h4>
      <button className={styles.status}>טיוטה</button>
      <p className={styles.date}>30/07/23</p>
      <p className={styles.edit}>
        <EditBtn color={"#8792A1"} />
      </p>
    </div>
  );
}

export default JobCard;
