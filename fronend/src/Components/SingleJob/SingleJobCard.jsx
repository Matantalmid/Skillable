import React from "react";
import styles from "./SingleJobCard.module.css";

export default function CreateSingleJobCard({ handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.jobForm}>
        <label htmlFor="name" className={styles.formLabel}>
          <strong> שם משרה:</strong>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="coverImg" className={styles.formLabel}>
          <strong>תמונת רקע:</strong>
        </label>
        <input
          type="text"
          id="coverImg"
          name="coverImg"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="description" className={styles.formLabel}>
          <strong>תיאור:</strong>
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          className={styles.formInput}
          rows="3"
        ></textarea>

        <label htmlFor="skillRequired" className={styles.formLabel}>
          <strong>מיומנויות נדרשות:</strong>
        </label>
        <textarea
          type="text"
          id="skillRequired"
          name="skillRequired"
          onChange={handleChange}
          className={styles.formInput}
          rows="5"
        />

        <label htmlFor="responsibilities" className={styles.formLabel}>
          <strong>אחריות:</strong>
        </label>
        <textarea
          type="text"
          id="responsibilities"
          name="responsibilities"
          onChange={handleChange}
          className={styles.formInput}
          rows="5"
        />

        <label htmlFor="profession" className={styles.formLabel}>
          <strong>מקצוע:</strong>
        </label>
        <input
          type="text"
          id="profession"
          name="profession"
          onChange={handleChange}
          className={styles.formInput}
        />

<label htmlFor="apply" className={styles.formLabel}>
  <strong>הגישו:</strong>
</label>
<input
  type="number"
  id="apply"
  name="apply"
  onChange={handleChange}
  className={styles.formInput}
  placeholder="אנא הזן מספר (לדוגמה: 5)"
/>


        <label htmlFor="status" className={styles.formLabel}>
          <strong>סטטוס:</strong>
        </label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="">בחר סטטוס</option>
          <option value="Open">פתוחות</option>
          <option value="Closed">טיוטות</option>
          <option value="Closed">סגורות</option>
          <option value="Closed">הודחו</option>
        </select>

        <label htmlFor="date" className={styles.formLabel}>
          <strong>תאריך:</strong>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className={styles.formInput}
        />

        <button type="submit" className={styles.newJobBtn}>
          צור משרה
        </button>
      </form>
    </div>
  );
}
