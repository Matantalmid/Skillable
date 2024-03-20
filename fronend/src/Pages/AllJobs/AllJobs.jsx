import React, { useEffect, useState } from "react";
import styles from "./allJobs.module.css";
import AllJobsFilter from "../../Components/AllJobs/allJobsFilter/AllJobsFilter";
import AllJobsList from "../../Components/AllJobs/allJobsList/AllJobsList";
import axios from "axios";
import { baseUrl } from "../../utils/backEndUtils";
import { UserContext } from "../../Context/User";
import { useContext } from "react";

function AllJobs() {
  const [filter, setFilter] = useState("פתוחות");
  const [jobs, setJobs] = useState([2]);
  const { user } = useContext(UserContext);
  const getJobsFromDb = async () => {
    try {
      const res = await axios.get(`${baseUrl}/jobs/byHR/${user._id}`);
      const data = res.data;
      setJobs(data);
    } catch (error) {
      console.log(error);
      console.log("wrong");
    }
  };

  useEffect(() => {
    if (user) getJobsFromDb();
  }, [user]);
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
