import React from "react";
import StudentFilter from "./StudentFilter";
import StudentList from "./StudentList";

export default function Canidate() {
  return (
    <>
      <div>
        <h2>מועמדים בתהליך</h2>
        <StudentFilter />
        <StudentList />
      </div>
    </>
  );
}
