import React, { useEffect, useState } from "react";
import StudentListCard from "../StudentListCard/StudentListCard";
import styles from "./StudentList.module.css";
import { baseUrl } from "../../../../utils/backEndUtils";
import axios from "axios";
import { UserContext } from "../../../../Context/User";
import { useContext } from "react";
function StudentLIst() {
  const { user } = useContext(UserContext);
  const [job, setJob] = useState();

  const getJobsByHR = async () => {
    console.log(user);
    try {
      const res = await axios.get(
        `${baseUrl}/jobs/hrJobsCandidates/${user._id}`
      );
      const data = res.data;
      console.log(data);
      setJob(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobsByHR();
  }, [user]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <p id={styles.profileImg}></p>
          <p id={styles.name}>שם</p>
          <p id={styles.profession}>מקצוע</p>
          <p id={styles.position}>המשרה</p>
          <p id={styles.status}>סטטוס</p>
          <p id={styles.message}>הודעה</p>
        </div>
        {job?.map((job) => {
          return (
            <div className={styles.containerTwo}>
              <StudentListCard job={job} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StudentLIst;
