import React from "react";
import styles from "./SmallHeader.module.css";
import { useNavigate } from "react-router-dom";
function SmallHeader({ howIGotHere, headerText }) {
  //!WORK IN PROGRESS DO NOT USE
  //TODO
  const nav = useNavigate();

  const shortCutTo = (link) => {};
  return (
    <div>
      <div>
        {howIGotHere.map((item) => {
          return (
            <p>
              {" "}
              {item.name} {">"}
            </p>
          );
        })}
      </div>
      <h1>{headerText}</h1>
    </div>
  );
}

export default SmallHeader;
