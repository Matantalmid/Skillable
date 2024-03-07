import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/User";
import Login from "../../Components/Auth/LogIn";
import SignUp from "../../Components/Auth/SignUp";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/backEndUtils";

export default function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [enteredAs, setEnteredAs] = useState("");
  const { user, getUserFromDb, setUser } = useContext(UserContext);
  const naviagte = useNavigate();
  //^switching from Login and SignUp
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  //^ handing extracting the data from the form
  const changeHandler = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  };
  const EnteredAsHandler = (e) => {
    setEnteredAs(e.target.value);
  };

  //^ handling the login method
  const loginHandler = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await axios.post(`${baseUrl}/${enteredAs}/login`, {
        email,
        password,
      });
      const token = res.data;
      localStorage.setItem("skillable_user_token", token);
      await getUserFromDb();
      console.log("logged in");
      naviagte("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle "Email or password are incorrect" error
        setError("Email or password are incorrect");
        console.log("Email or password are incorrect");
      } else {
        // Handle other errors
        console.log("An error occurred:", error.message);
      }
    }
  };

  //^ handling the signUp method
  const signUpHandler = async (e) => {
    const { email, password, firstName, lastName } = formData;
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/${enteredAs}/register`, {
        email,
        password,
        firstName,
        lastName,
      });
      const data = res.data;
      localStorage.setItem("skillable_user_token", data.token);
      // setUser(data.user);
      // naviagte("/");
      console.log("registered");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoginMode ? (
        <Login
          sumbitHandler={loginHandler}
          changeHandler={changeHandler}
          toggleMode={toggleMode}
          EnteredAsHandler={EnteredAsHandler}
          error={error}
        />
      ) : (
        <SignUp
          sumbitHandler={signUpHandler}
          changeHandler={changeHandler}
          toggleMode={toggleMode}
          EnteredAsHandler={EnteredAsHandler}
          error={error}
        />
      )}
    </div>
  );
}
