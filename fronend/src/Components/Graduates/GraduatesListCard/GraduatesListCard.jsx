import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../utils/backEndUtils";
import { UserContext } from "../../../Context/User";
import { useContext } from "react";

function GraduatesListCard() {
  const { user } = useContext(UserContext);
  const [graduate, setGraduate] = useState();

  const getStudentByCollege = async () => {
    console.log(user.college[0]);
    try {
      const res = await axios.get(`${baseUrl}/student/${user.college[0]}`);
      const data = res.data;
      console.log(res);
      setGraduate(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentByCollege();
  }, [user]);

  return (
    <div>
      <img src="" alt="profileImg" />
      <p id="name">שם</p>
      <p id="profession">מקצוע</p>
      <p id="skills">מיומנות</p>
      <p id="rating">דירוג</p>
      <p id="status">סטטוס</p>
      <p id="profile">פרופיל</p>
      <p id="message">הודעה</p>
      {graduate?.map((graduate) => {
        return (
          <div>
            <h1>1</h1>
            {console.log(graduate)}
          </div>
        );
      })}
    </div>
  );
}

export default GraduatesListCard;
