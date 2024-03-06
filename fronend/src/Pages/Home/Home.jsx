import React from "react";
import JobsStatus from "../../Components/Home/JobsStatus/JobsStatus";
import NewMember from "../../Components/Home/NewMember";
import Qualifying from "../../Components/Home/Qualifying/Qualifying";
import Welcome from "../../Components/Home/Welcom/Welcome";
import Canidate from "../../Components/Home/Candidate/Canidate";

function Home() {
  return (
    <>
      <div>
        <Canidate />
        <Welcome />
        <JobsStatus />
        <Qualifying />
        <NewMember />
      </div>
    </>
  );
}

export default Home;
