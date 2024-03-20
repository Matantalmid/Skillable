import React from "react";
import GraduatesListCard from "../GraduatesListCard/GraduatesListCard";
function GraduatesList() {
  return (
    <>
      <div>
        <p id="profileImg"></p>
        <p id="name">שם</p>
        <p id="profession">מקצוע</p>
        <p id="skills">מיומנות</p>
        <p id="rating">דירוג</p>
        <p id="status">סטטוס</p>
        <p id="profile">פרופיל</p>
        <p id="message">הודעה</p>
        <GraduatesListCard />
      </div>
    </>
  );
}

export default GraduatesList;
