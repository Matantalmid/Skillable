import React, { useState } from "react";
import StudentFilter from "../StudentFilter/StudentFilter";
import StudentList from "../StudentList/StudentList";
import styles from "./Canidate.module.css";

export default function Canidate() {
  const [filter, setFilter] = useState("בתהליך");
  return (
    <>
      <div className={styles.container}>
        <h2>מועמדים בתהליך</h2>
        <StudentFilter filter={filter} setFilter={setFilter} />
        <StudentList />
      </div>
    </>
  );
}
