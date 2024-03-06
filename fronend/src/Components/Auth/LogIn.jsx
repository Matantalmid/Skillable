import React, { useContext, useState } from "react";
// import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

export default function Login({ sumbitHandler, changeHandler, toggleMode, EnteredAsHandler, error }) {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <div>
        </div>
        <h1>התחברות</h1>
        <form onSubmit={sumbitHandler}>
        
    <div>
      <label htmlFor="userEnteredAsInput">נכנס כ: {error === "user access is incorrect" && <span>גישה שגויה</span>}</label>
      <select
        onChange={EnteredAsHandler}
        type="text"
        name="EnteredAs"
        id="userEnteredAsInput"
        required
        defaultValue=""
      >
        <option value="" disabled></option>
        <option value="students" >סטודנט/ית</option>
        <option value="staff">סגל</option>
        <option value="hrs">מגייס/ת</option>
      </select>
    </div>

          <div>
            <label htmlFor="userEmailInput">אימייל: {error=="Email or password are incorrect"&& <span>אימייל או סיסמה שגויים</span>}</label>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="userEmailInput"
              required
            />
          </div>
          <div>
            <label htmlFor="userPasswordInput">סיסמה:</label>
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              id="userPasswordInput"
              required
            />
          </div>
          <button type="submit">
            התחברות
          </button>
        </form>
        <div>
          <p
            onClick={() => {
              nav("/auth/forgotpassword");
            }}>
            שכחת סיסמא? לחץ כאן
          </p>
          <p onClick={toggleMode}>
            אין לך חשבון? לחץ כאן
          </p>
        </div>
      </div>
    </div>
  );
}

