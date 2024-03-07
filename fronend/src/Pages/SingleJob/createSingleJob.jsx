import React from "react";
import CreateSingleJobCard from "../../Components/SingleJob/SingleJobCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/backEndUtils";

export default function CreateJobPage() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(`${baseUrl}/jobs`, {formData});
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

// const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     console.log(formData);
