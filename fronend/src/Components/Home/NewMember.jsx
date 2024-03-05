import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function NewMember() {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
        <h2>15 חדשים</h2>
        <p>מועמדים חדשים במערכת</p>
      </div>
    </>
  );
}

export default NewMember;
