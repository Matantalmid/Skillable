import React, { useState } from "react";
// import { UserContext } from "../../context/User";
// import { useContext } from ""


export default function ForgotPassword() {
  const [formData, setFormData] = useState();
//   const { forgotPasswordHandler } = useContext(UserContext);
  const [isOk, setIsOk] = useState(true);
  const [didSendMail, setDidSendmMail] = useState(false);
  
  const changeHandler = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const didSend=await forgotPasswordHandler(formData)
    setIsOk(didSend);
     setDidSendmMail(didSend);
    
  };
  return (
    <div>
      {didSendMail ? (
        <div>נשלחה בקשת חידוש סיסמא למייל</div>
      ) : (
        <form>
          <div>
            <label htmlFor="userEmailInput">
              אימייל לשחזור סיסמא:
              {isOk === false && <span>האימייל לא קיים</span>}
            </label>

            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="userEmailInput"
              required
            />
          </div>
          <button onClick={submitHandler}> שלח</button>
        </form>
      )}
    </div>
  );
}

