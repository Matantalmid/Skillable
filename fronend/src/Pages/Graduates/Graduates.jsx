import React from "react";
import GraduatesFilter from "../../Components/Graduates/GraduatesFilter/GraduatesFilter";
import GraduatesList from "../../Components/Graduates/GraduatesList/GraduatesList";
import { Link } from "react-router-dom";

function Graduates() {
  return (
    <>
      <div>
        <p>
          {"בית > "}
          <Link to="/Graduates">בוגרים</Link>
        </p>
        <h1>בוגרים</h1>
        <GraduatesFilter />
        <GraduatesList />
      </div>
    </>
  );
}

export default Graduates;
