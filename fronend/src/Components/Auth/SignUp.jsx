import React from "react";
import styles from "./SignUp.module.css";

export default function SignUp({
  sumbitHandler,
  changeHandler,
  toggleMode,
  EnteredAsHandler,
  error,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.signUpWrapper}>
        <h1 className={styles.heading}>הרשמה</h1>
        <form onSubmit={sumbitHandler} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="userNameInput" className={styles.label}>
              שם פרטי:
            </label>
            <input
              onChange={changeHandler}
              type="text"
              name="firstName"
              id="userNameInput"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userLastNameInput" className={styles.label}>
              שם משפחה:
            </label>
            <input
              onChange={changeHandler}
              type="text"
              name="lastName"
              id="userLastNameInput"
              required
              className={styles.input}
            />
          </div>
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
              {/* <option value="students" >סטודנט/ית</option> */} //! כרגע אי
              אפשר להירשם בתור סטונדט
              <option value="staff">סגל</option>
              <option value="hrs">מגייס/ת</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="userEmailInput" className={styles.label}>
              אימייל:
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
              placeholder="******"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            הרשמה
          </button>
        </form>
        <p onClick={toggleMode} className={styles.link}>
          כבר יש לך חשבון? לחץ כאן
        </p>
      </div>
    </div>
  );
}
