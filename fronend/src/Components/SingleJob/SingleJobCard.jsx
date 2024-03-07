import React from "react";
import styles from "./SingleJobCard.module.css";

export default function CreateSingleJobCard({ handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.jobForm}>
        <label htmlFor="name" className={styles.formLabel}>
          שם משרה:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="coverImg" className={styles.formLabel}>
          תמונת רקע:
        </label>
        <input
          type="text"
          id="coverImg"
          name="coverImg"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="description" className={styles.formLabel}>
          תיאור:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="skillRequired" className={styles.formLabel}>
          מיומנויות נדרשות:
        </label>
        <input
          type="text"
          id="skillRequired"
          name="skillRequired"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="responsibilities" className={styles.formLabel}>
          אחריות:
        </label>
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="profession" className={styles.formLabel}>
          מקצוע:
        </label>
        <input
          type="text"
          id="profession"
          name="profession"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="apply" className={styles.formLabel}>
          הגישו:
        </label>
        <input
          type="number"
          id="apply"
          name="apply"
          onChange={handleChange}
          className={styles.formInput}
        />

        <label htmlFor="status" className={styles.formLabel}>
          סטטוס:
        </label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="">Select status</option>
          <option value="Open">פתוחות</option>
          <option value="Closed">טיוטות</option>
          <option value="Closed">סגורות</option>
          <option value="Closed">הודחו</option>
        </select>

        <label htmlFor="date" className={styles.formLabel}>
          תאריך:
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

