import React, { useState } from "react";
import styles from "./allJobs.module.css";
import AllJobsFilter from "../../Components/AllJobs/allJobsFilter/AllJobsFilter";
import AllJobsList from "../../Components/AllJobs/allJobsList/AllJobsList";
function AllJobs() {
  const [filter, setFilter] = useState("פתוחות");
  return (
    <div>
      <h2>כל המשרות</h2>
      {/* <AllJobsFilter setFilter={setFilter} filter={filter} /> */}
      <div>
        <AllJobsList />
      </div>
    </div>
  );
}

export default AllJobs;
