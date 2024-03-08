import React, { useContext, useState } from "react";
// import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";

export default function Login({
  sumbitHandler,
  changeHandler,
  toggleMode,
  EnteredAsHandler,
  error,
}) {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.heading}>התחברות</h1>
        <form onSubmit={sumbitHandler}>
          <div className={styles.formGroup}>
            <label htmlFor="userEnteredAsInput" className={styles.label}>
              נכנס כ:{" "}
              {error === "user access is incorrect" && (
                <span className={styles.errorSpan}>גישה שגויה</span>
              )}
            </label>
            <select
              onChange={EnteredAsHandler}
              type="text"
              name="EnteredAs"
              id="userEnteredAsInput"
              required
              defaultValue=""
              className={styles.select}
            >
              <option value="" disabled></option>
              <option value="students">סטודנט/ית</option>
              <option value="staff">סגל</option>
              <option value="hrs">מגייס/ת</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="userEmailInput" className={styles.label}>
              אימייל:{" "}
              {error == "Email or password are incorrect" && (
                <span className={styles.errorSpan}>אימייל או סיסמה שגויים</span>
              )}
            </label>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="userEmailInput"
              required
              placeholder="הזן כתובת אימייל"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userPasswordInput" className={styles.label}>
              סיסמה:
            </label>
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              id="userPasswordInput"
              required
              placeholder="********"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            התחברות
          </button>
        </form>
        <div className={styles.linkWrapper}>
          <p
            onClick={() => {
              nav("/auth/forgotpassword");
            }}
            className={styles.link}
          >
            שכחת סיסמא? לחץ כאן
          </p>
          <p onClick={toggleMode} className={styles.link}>
            אין לך חשבון? לחץ כאן
          </p>
        </div>
      </div>
    </div>
  );
}
