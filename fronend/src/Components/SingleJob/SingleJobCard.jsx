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
          placeholder="הזן שם משרה"
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
          placeholder="הזן מקצוע"
        />

        <label htmlFor="coverImg" className={styles.fileLabel}>
          <strong>תמונת רקע</strong>
          <input
            type="file"
            id="coverImg"
            name="coverImg"
            onChange={handleChange}
            className={styles.fileInput}
            accept="image/*"
            placeholder="העלה/י קובץ"
          />
          {/* <span className={styles.fileButton}>
          בחר קובץ
          </span> */}
        </label>

        <label htmlFor="workFrame" className={styles.formLabel}>
          <strong>מסגרת משרה:</strong>
        </label>
        <select
          id="workFrame"
          name="workFrame"
          onChange={handleChange}
          className={styles.formInput}

        >
          <option value="placeholder">הזן מסגרת משרה</option>
          <option value="fullJob">משרה מלאה</option>
          <option value="studentJob">משרת סטודנט</option>
          <option value="halfJob">חצי משרה</option>
        </select>

        <label htmlFor="location" className={styles.formLabel}>
          <strong>מיקום משרה:</strong>
        </label>
        <input
          id="location"
          name="location"
          onChange={handleChange}
          className={styles.formInput}
          placeholder="הזן מיקום משרה"
        />

        <label htmlFor="workFlow" className={styles.formLabel}>
          <strong>סוג משרה:</strong>
        </label>
        <select
          id="workFlow"
          name="workFlow"
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="placeholder">הזן סוג משרה</option>
          <option value="Hybrid">היברידי</option>
          <option value="Remote">מרחוק</option>
          <option value="onSite">פרונטלי</option>
        </select>

        <label htmlFor="salaryRange" className={styles.formLabel}>
          <strong>טווח שכר:</strong>
        </label>
        <input
          id="salaryRange"
          name="salaryRange"
          onChange={handleChange}
          className={styles.formInput}
          placeholder="הזן טווח שכר"
        />

        <label htmlFor="description" className={styles.formLabel}>
          <strong>רקע:</strong>
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          className={styles.formInput}
          rows="3"
          placeholder="הזן רקע משרה"
        ></textarea>

        <label htmlFor="skillRequired" className={styles.formLabel}>
          <strong>מיומנויות טכנולוגיות נדרשות:</strong>
        </label>
        <textarea
          type="text"
          id="skillRequired"
          name="skillRequired"
          onChange={handleChange}
          className={styles.formInput}
          rows="5"
          placeholder="הזן מיומנויות טכנולוגיות נדרשות"
        />

        <label htmlFor="skillRequired" className={styles.formLabel}>
          <strong>מיומנויות רכות נדרשות:</strong>
        </label>
        <textarea
          type="text"
          id="skillRequired"
          name="skillRequired"
          onChange={handleChange}
          className={styles.formInput}
          rows="5"
          placeholder="הזן מיומנויות רכות נדרשות"
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
          placeholder="הזן אחריות משרה"
        />

        {/* <label htmlFor="apply" className={styles.formLabel}>
    <strong>הגישו:</strong>
    </label>
    <input
    type="number"
    id="apply"
    name="apply"
    onChange={handleChange}
    className={styles.formInput}
    placeholder="אנא הזן מספר (לדוגמה: 5)"
    /> */}

        <label htmlFor="status" className={styles.formLabel}>
          <strong>סטטוס:</strong>
        </label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="">בחר סטטוס משרה</option>
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
          placeholder="הזן תאריך משרה"
        />

        <button type="submit" className={styles.newJobBtn}>
          צור משרה
        </button>
      </form>
    </div>
  );
}
