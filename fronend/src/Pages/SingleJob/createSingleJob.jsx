import React from "react";
import CreateSingleJobCard from "../../Components/SingleJob/SingleJobCard";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/User";
import axios from "axios";
import { baseUrl } from "../../utils/backEndUtils";

//implement cloudinary for company cover iamge

export default function CreateJobPage() {
  const [formData, setFormData] = useState({});
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(user);
    try {
      const res = await axios.post(`${baseUrl}/jobs`, {...formData,postedBy:user._id});
      const data = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateSingleJobCard
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

