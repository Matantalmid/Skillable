import React from "react";
import styles from "./studentProfile.module.css";
import HeartIcon from "../../icons/HeartIcon";
import HollowClock from "../../icons/HollowClock";
import PositionIcon from "../../icons/PositionIcon";
import DownloadArrow from "../../icons/DownloadArrow";
import PhoneCall from "../../icons/PhoneCall";
import Envelope from "../../icons/Envelope";
import Globe from "../../icons/Globe";
import LinkedIn from "../../icons/LinkedIn";
import GitHub from "../../icons/GitHub";
import Sparks from "../../icons/Sparks";
import PagnationDot from "../../icons/PagnationDot";
function StudentProfile({ user }) {
  console.log(user);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.rightSide}>
          <div className={styles.imgContainer}>
            <img
              src="https://s3-alpha-sig.figma.com/img/c29d/992e/290d0b95ab983596a7e281eef53f8bd8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLjQvtMh093PiheQCe-8rr8NxmTX7JYY-08Vei6ARWvBEyDqn3m9pFys886C97KF0uhy9DK0sYvTzROvvp0X4k7jXcLgFTk9-Z1Z7T~6iGLSnSDpcQPlYe2eUvJx7qfxRfN6oewCLQ~HnujSy18LUg-RAp3WYje2nSC6WHdcmH-J0yuiM0YljkD0aOQOKpBBk4BFyW5Y4IY0ar~Av8vPxqS47yYOL7rVaqlYY9bvDYPYkeihctlnZnhRyajpEX-hzwnIZiUYjalPi9bs33PGU9wYBzac-eimxlw9LjSGIKr4~s4bebv~DuS3Q3Hw9Xd4jELgruw5oM~Vh02IIOAaNQ__"
              alt="profileImg"
            />
            <HeartIcon />
          </div>
          <div className={styles.nameAndProfession}>
            <h2 className={styles.name}>
              {user ? `${user?.firstName} ${user?.lastName}` : "טל כהן"}
            </h2>
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
      <div className={styles.aboutAndContactContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            <h2>אודות</h2>
            <div>...</div>
          </div>
          <div className={styles.aboutDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ratione facere doloribus, nisi omnis, asperiores cupiditate
            quibusdam illum id voluptatem incidunt praesentium sed cumque nemo
            velit rerum? Fugiat, possimus quas! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis iste voluptas magnam enim
            dicta illo temporibus sequi magni architecto suscipit, laborum
            veniam itaque dolorum maiores, optio, tempore ipsum numquam
            blanditiis.
          </div>
          <div className={styles.langBox}>
            <div>
              <span className={styles.langName}>עברית</span>
              <span className={styles.langRate}>מעולה</span>
            </div>
            <div>
              <span className={styles.langName}>אנגלית</span>
              <span className={styles.langRate}>מצויין</span>
            </div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactHeader}>
            <h2>יצירת קשר</h2>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfo1}>
              <div className={styles.phone}>
                <PhoneCall />
                <span>050-4521-665</span>
              </div>
              <div className={styles.email}>
                <Envelope />
                <span>050-4521-665</span>
              </div>
              <div className={styles.site}>
                <a href="" target="_blank">
                  <Globe />
                  <span>050-4521-665</span>
                </a>
              </div>
            </div>
            <div className={styles.contactInfo2}>
              <div className={styles.linkedIn}>
                <a href="" target="_blank">
                  <LinkedIn />
                  <span>050-4521-665</span>
                </a>
              </div>
              <div className={styles.github}>
                <a href="" target="_blank">
                  <GitHub />
                  <span>050-4521-665</span>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recommendationsContainer}>
        <div className={styles.recommendationsHeader}>
          <h2>ממליצים</h2>
        </div>
        <div className={styles.recommendationsBox}>
          <div className={styles.twoRecommendtionsBox}>
            <div className={styles.recomendtionBox}>
              <img
                src="https://s3-alpha-sig.figma.com/img/8124/21a4/2e2cc5788a0f64b53a1f28566818ffbf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q79Xa6WqI4aFPlN22wPx0tsqU~Ahc1AV57iJ2Xk3JI5Phwo9oURjwjljsJ1H8dA50f5PPOVp3Xgn7Wylp6h~St2mszo4jEPHkoaEbCZkSIV8e1I39iSMC2I90Avq8cL9r3QL0dswSqTXyLH3pE4US2mBPacOGYzsFB0wwnxBixmsEtS6r0L-YItjK5NA-wM6bko0F36Bcx58ZeSotYWo0ug2FwoqzeoBI6RIiXguJcLA8HYFVI4TEtOAe~a6FHDQpy2nwG9diAdMXGUoaym~Gp2lH7pTsYqv0GFcTDPPd7hidyWFgx9LyqfMcxUcOnVzdf7ZKqJRRKKKWpBURAFAdA__"
                alt=""
              />
              <div className={styles.recomTextContainer}>
                <div className={styles.recomDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, et sapiente quisquam quod quis, laboriosam itaque
                  deserunt officiis eveniet non minus tempore labore laudantium
                  qui magni voluptatibus numquam error quae.
                </div>
                <div className={styles.recomSender}>עמית שושן • IITC</div>
              </div>
            </div>
            <div className={styles.recomendtionBox}>
              <img
                src="https://s3-alpha-sig.figma.com/img/8124/21a4/2e2cc5788a0f64b53a1f28566818ffbf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q79Xa6WqI4aFPlN22wPx0tsqU~Ahc1AV57iJ2Xk3JI5Phwo9oURjwjljsJ1H8dA50f5PPOVp3Xgn7Wylp6h~St2mszo4jEPHkoaEbCZkSIV8e1I39iSMC2I90Avq8cL9r3QL0dswSqTXyLH3pE4US2mBPacOGYzsFB0wwnxBixmsEtS6r0L-YItjK5NA-wM6bko0F36Bcx58ZeSotYWo0ug2FwoqzeoBI6RIiXguJcLA8HYFVI4TEtOAe~a6FHDQpy2nwG9diAdMXGUoaym~Gp2lH7pTsYqv0GFcTDPPd7hidyWFgx9LyqfMcxUcOnVzdf7ZKqJRRKKKWpBURAFAdA__"
                alt=""
              />
              <div className={styles.recomTextContainer}>
                <div className={styles.recomDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, et sapiente quisquam quod quis, laboriosam itaque
                  deserunt officiis eveniet non minus tempore labore laudantium
                  qui magni voluptatibus numquam error quae.
                </div>
                <div className={styles.recomSender}>עמית שושן • IITC</div>
              </div>
            </div>
          </div>
          <div className={styles.recommendationsPagination}>
            <PagnationDot color={"#1C1F3C"} />
            <PagnationDot />
            <PagnationDot />
            <PagnationDot />
          </div>
        </div>
      </div>
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
