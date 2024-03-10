import React from "react";
import GraduatesListCard from "../GraduatesListCard/GraduatesListCard";
function GraduatesList() {
  return (
    <>
      <div>
        <p id="">שם</p>
        <p id="">מיומנות</p>
        <p id="">דירוג</p>
        <p id="">סטטוס</p>
        <p id="">פרופיל</p>
        <p id="">הודעה</p>
        <GraduatesListCard />
      </div>
    </>
  );
}

export default GraduatesList;
