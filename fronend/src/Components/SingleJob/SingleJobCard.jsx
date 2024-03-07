import React from "react";

export default function CreateSingleJobCard({ handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="coverImg">Cover Image URL:</label>
        <input
          type="text"
          id="coverImg"
          name="coverImg"
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text" // Change type to "text"
          id="description"
          name="description"
          onChange={handleChange}
        />

        <label htmlFor="skillRequired">Skill Required:</label>
        <input
          type="text"
          id="skillRequired"
          name="skillRequired"
          onChange={handleChange}
        />

        <label htmlFor="responsibilities">Responsibilities:</label>
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          onChange={handleChange}
        />

        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          id="profession"
          name="profession"
          onChange={handleChange}
        />

        <label htmlFor="apply">Apply:</label>
        <input type="number" id="apply" name="apply" onChange={handleChange} />

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" onChange={handleChange}>
          <option value="">Select status</option>
          <option value="Open">פתוחות</option>
          <option value="Closed">טיוטות</option>
          <option value="Closed">סגורות</option>
          <option value="Closed">הודחו</option>
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" onChange={handleChange} />

        <button type="submit">Create job</button>
      </form>
    </div>
  );
}
