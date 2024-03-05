import React from "react";
import StudentListCard from "./StudentListCard";
function StudentLIst() {
  return (
    <>
      <div>
        <p>שם</p>
        <p>מקצוע</p>
        <p>המשרה</p>
        <p>סטטוס</p>
        <p>הודעה</p>
        <div>
          <StudentListCard />
        </div>
      </div>
    </>
  );
}

export default StudentLIst;
