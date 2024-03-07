import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { UserContext } from "../../Context/User";
function Navbar() {
  const { user } = useContext(UserContext);
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
              {user ? (
                <Link to={"/MyProfile"}>
                  {" "}
                  <FontAwesomeIcon icon={faUser} style={{ color: "#B197FC" }} />
                </Link>
              ) : (
                <Link to={"/Auth"}>
                  {" "}
                  <FontAwesomeIcon icon={faUser} style={{ color: "#B197FC" }} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
