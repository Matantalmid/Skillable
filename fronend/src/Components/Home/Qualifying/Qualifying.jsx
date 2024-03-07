import React from "react";
import styles from "./Qualifying.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { MAIN_PURPEL } from "../../../Constant/constants";

function Qualifying() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <FontAwesomeIcon
            icon={faChampagneGlasses}
            style={{ color: MAIN_PURPEL }}
          />
          <h4>
            <span>30</span> מתאימים
          </h4>
        </div>
        <p>מועמדים מתאימים למשרות שפורסמו</p>
      </div>
    </>
  );
}

export default Qualifying;
