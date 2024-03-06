import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <header>
        <div className={styles.navbar}>
          <div className={styles.containerOne}>
            <h1 className={styles.headline}>Skillable</h1>
            <div className={styles.linksContainer}>
              <Link to="/">ראשי</Link>
              <Link to="/">בוגרים</Link>
              <Link to="/">חברות</Link>
              <Link to="/jobs">משרות</Link>
              <Link to="/">דיווחים</Link>
            </div>
          </div>
          <div className={styles.containerTwo}>
            <div className={styles.dataContainer}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#000000" }}
              />
              <FontAwesomeIcon icon={faBell} style={{ color: "#000000" }} />
              <FontAwesomeIcon icon={faComment} style={{ color: "#000000" }} />
            </div>
            <div className={styles.userImage}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#B197FC" }} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
