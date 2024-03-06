import React from "react";
import styles from "./Qualifying.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

function Qualifying() {
  return (
    <>
      <div className={styles.container}>
        <FontAwesomeIcon
          icon={faChampagneGlasses}
          style={{ color: "#6940DB" }}
        />
        <h2>30 מתאימים</h2>
        <p>מועמדים מתאימים למשרות שפורסמו</p>
      </div>
    </>
  );
}

export default Qualifying;
