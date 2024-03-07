import React from "react";
import styles from "./studentProfile.module.css";
import HeartIcon from "../../icons/HeartIcon";
import HollowClock from "../../icons/HollowClock";
import PositionIcon from "../../icons/PositionIcon";
import DownloadArrow from "../../icons/DownloadArrow";
import Sparks from "../../icons/Sparks";
function StudentProfile() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <div className={styles.rightSide}>
          <div className={styles.imgContainer}>
            <img src="https://s3-alpha-sig.figma.com/img/c29d/992e/290d0b95ab983596a7e281eef53f8bd8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLjQvtMh093PiheQCe-8rr8NxmTX7JYY-08Vei6ARWvBEyDqn3m9pFys886C97KF0uhy9DK0sYvTzROvvp0X4k7jXcLgFTk9-Z1Z7T~6iGLSnSDpcQPlYe2eUvJx7qfxRfN6oewCLQ~HnujSy18LUg-RAp3WYje2nSC6WHdcmH-J0yuiM0YljkD0aOQOKpBBk4BFyW5Y4IY0ar~Av8vPxqS47yYOL7rVaqlYY9bvDYPYkeihctlnZnhRyajpEX-hzwnIZiUYjalPi9bs33PGU9wYBzac-eimxlw9LjSGIKr4~s4bebv~DuS3Q3Hw9Xd4jELgruw5oM~Vh02IIOAaNQ__" alt="profileImg" />
            <HeartIcon />
          </div>
          <div className={styles.nameAndProfession}>
            <h2 className={styles.name}>טל כהן</h2>
            <h3>Full Stack Development</h3>
          </div>
        </div>
        <div className={styles.leftSide}>
          <div className={styles.graphsContainer}>
            <div className={styles.techGraph}>
              <div></div>
              <div>כישורים טכנולוגים</div>
            </div>
            <div className={styles.softGraph}>
              <div></div>
              <div>מיומנות רכה </div>
            </div>
          </div>
          <div className={styles.workPref}>
            <div>
              <HollowClock /> משרה מלאה
            </div>
            <div>
              <PositionIcon />
              מרכז
            </div>
            <div>
              <button className={styles.cvBtn}>
                קורות חיים
                <DownloadArrow />
              </button>
            </div>
          </div>
          <div className={styles.interviewMe}>
            <h4>התרשמתם מהפרופיל שלי?</h4>
            <div>
              <button className={styles.interviewMeBtn}>
                תראיינו אותי <Sparks />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutAndContactContainer}></div>
      <div className={styles.recommendations}></div>
      <div className={styles.skillsHeaderBtn}></div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}></div>
        <div className={styles.techSkillsContainer}>
          <div>
            <h3></h3>
          </div>
          <div className={styles.skillListsContainer}></div>
          <div className={styles.moreSkils}></div>
        </div>
        <div className={styles.softSkillsBox}></div>
      </div>
    </div>
  );
}

export default StudentProfile;
