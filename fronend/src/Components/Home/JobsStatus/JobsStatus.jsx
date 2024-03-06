import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./JobsStatus.module.css";
function JobsStatus() {
  return (
    <>
      <div className={styles.jobsStatusContainer}>
        <div className={styles.containerOne}>
          <h1>סטטוס משרות</h1>
          <select name="">
            <option value="month">חודש אחרון</option>
            <option value="day">יום האחרון</option>
            <option value="year">שנה האחרונה</option>
          </select>
        </div>
        <div className={styles.containerTwo}>
          <FontAwesomeIcon icon={faCircle} style={{ color: "#6940DB" }} />
          <span>בתהליך</span>{" "}
          <FontAwesomeIcon icon={faCircle} style={{ color: "#9375e6" }} />
          <span>פרסמו</span>{" "}
          <FontAwesomeIcon icon={faCircle} style={{ color: "#F0ECFB" }} />
        <span>התקבלו</span>{" "}
        </div>
        <div className={styles.containerThree}>
          <img
            src="https://consumersiteimages.trustpilot.net/business-units/5c61aa30923a6e0001c3c22b-198x149-1x.avif"
            alt="diagram"
          />
        </div>
      </div>
    </>
  );
}

export default JobsStatus;
