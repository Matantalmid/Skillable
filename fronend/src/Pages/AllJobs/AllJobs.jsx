import React, { useEffect, useState } from "react";
import styles from "./allJobs.module.css";
import AllJobsFilter from "../../Components/AllJobs/allJobsFilter/AllJobsFilter";
import AllJobsList from "../../Components/AllJobs/allJobsList/AllJobsList";
import axios from 'axios';
import { baseUrl } from "../../utils/backEndUtils";

function AllJobs() {
  const [filter, setFilter] = useState("פתוחות");
  const [jobs, setJobs] = useState([ "Test","d"]);

  const getJobsFromDb=async ()=>{
    try {
      const res= await axios.get(`${baseUrl}/jobs`)
      const data=res.data
      console.log(data);
      setJobs(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getJobsFromDb()
  },[])
  return (
    <div>
      <h2>כל המשרות</h2>
      <AllJobsFilter setFilter={setFilter} filter={filter} />
      <div>
        <AllJobsList jobs={jobs} />
      </div>
    </div>
  );
}

export default AllJobs;
