import React from "react";
import JobsStatus from "../../Components/Home/JobsStatus/JobsStatus";
import NewMember from "../../Components/Home/NewMember/NewMember";
import Qualifying from "../../Components/Home/Qualifying/Qualifying";
import Welcome from "../../Components/Home/Welcom/Welcome";
import Canidate from "../../Components/Home/Candidate/Canidate/Canidate";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <Welcome />
          <JobsStatus />
          <div className={styles.containerTwo}>
            <Qualifying />
            <NewMember />
          </div>
        </div>
        <Canidate />
      </div>
    </>
  );
}

export default Home;
