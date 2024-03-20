import React from "react";
import MagnifyingGlass from "../../../icons/MagnifyingGlass";
import Filter from "../../../icons/Filter";
function GraduatesFilter() {
  return (
    <>
      <div>
        <p>הכל</p>
        <p>פנויים</p>
        <p>בתהליך</p>
        <p>התקבלו</p>
        <div>
          <input type="text" name="name" placeholder="שם" />
          <select name="profession" id="" defaultValue="1">
            <option value="1">{"מקצוע (הכל)"}</option>
            <option value="QA">QA</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Data analyst">Data Analyst</option>
          </select>
          <select name="skills" id="" defaultValue="1">
            <option value="1">{"מיומנות (הכל)"}</option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="Back">Back</option>
            <option value="Front">Front</option>
            <option value="MongoDB">MongoDB</option>
            <option value="SQL">SQL</option>
          </select>
          <MagnifyingGlass />
          <Filter />
        </div>
      </div>
    </>
  );
}

export default GraduatesFilter;
