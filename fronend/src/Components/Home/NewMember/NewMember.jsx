import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./NewMember.module.css";

function NewMember() {
  return (
    <>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
        <h4><span>15</span> חדשים</h4>
        <p>מועמדים חדשים במערכת</p>
      </div>
    </>
  );
}

export default NewMember;
