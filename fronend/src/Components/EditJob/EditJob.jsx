import React from "react";
import styles from "./EditJob.module.css";
import EditBtn from "../../icons/EditBtn";

export default function EditJobCo() {
  return (
    <div>
      <h1>משרה</h1>
      <br />
      <br />

      <div className={styles.jobDetails}>
        <div className={styles.headerContainer}>
          <div className={styles.jobNameImgContainer}>
            <h2 className={styles.name}>Job Name</h2>
            <img
              src="https://s3-alpha-sig.figma.com/img/c8da/ceeb/b96359ecb130cf49b1e7aaa8c20a4a56?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8olEG5VdCGHbC~k3jzihqWa8sFH~NTnXFnvQOB~cFTy4rq10teAY0EwQUoxfPtR9nObJFsUk-7Q3lA4tPRNAeGGAmrB~JCacP25UgZyLvVGaGGvfLdVu~52ZGkmFFL8ZCSZ0AHemJhMeIr5Ow89VM9z-3brYluwMb8Y-IIQ5fVZZ8F3HHj-cXYhH44khQXbSKMe9WFiEXkM8-XLF6HSWsKVT~skdri9xEyyqmHj4LnXxXyV4F-0zquKJtM0G36E6Sgvo3uDWi1LbilRfFPjClSKEJtAPArYYZW6923PIE0FdZ~xsxVoLNuEW2WyZLPBSeUH279xY58rNYC~SwDcqQ__"
              alt="coverImg"
              className={styles.coverImg}
            />
          </div>

          <div className={styles.leftSideContainer}>
            <p className={styles.date}>Date</p>
            <select className={styles.status}>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Draft">Draft</option>
            </select>
            <p className={styles.editIcon}>
              <EditBtn color={"#8792A1"} />
            </p>
          </div>
        </div>

        <div className={styles.detailsContainer}>
          <p className={styles.profession}>Profession</p>
          <p className={styles.workFrame}>Work Frame</p>
          <p className={styles.location}>Location</p>
          <p className={styles.workFlow}>Work Flow</p>
          <p className={styles.salaryRange}>Salary Range</p>
        </div>
      </div>

      <div className={styles.additionalDetails}>
        <div className={styles.description}>
          <h2>רקע</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.role}>
          <h2>על התפקיד</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.experience}>
          <h2>ניסיון וכישורים</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.skillRequired}>
          <div className={styles.technicalSkill}>
            <h2>מיומנויות טכניות נדרשות</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.softSkills}>
            <h2>מיומנויות רכות נדרשות</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.saveJobBtn}>שמירת משרה</button>
        <button className={styles.saveDraftBtn}>שמירת טיוטה</button>
      </div>
    </div>
  );
}
