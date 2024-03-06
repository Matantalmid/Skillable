import React from 'react'

export default function SignUp({ sumbitHandler, changeHandler, toggleMode,EnteredAsHandler, error}) {
  return (
    <div>
      <div >
        <div>
        </div>
        <h1>הרשמה</h1>
        <form onSubmit={sumbitHandler}>
          <div>
            <label htmlFor="userNameInput">שם מלא:</label>
            <input onChange={changeHandler} type="text" name="fullName" id="userNameInput" required />
          </div>

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
            <label htmlFor="userEmailInput">אימייל:</label>
            <input onChange={changeHandler} type="email" name="email" id="userEmailInput" required />
          </div>

          <div>
            <label htmlFor="userPasswordInput">סיסמה:</label>
            <input onChange={changeHandler} type="password" name="password" id="userPasswordInput" required />
          </div>

          <button type="submit">הרשמה</button>
        </form>
        <p onClick={toggleMode}>כבר יש לך חשבון? לחץ כאן</p>
      </div>
    </div>
  )
}

