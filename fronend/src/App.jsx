import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJobs from "./Pages/AllJobs/AllJobs";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile";
import MyProfile from "./Pages/Profile/MyProfile";
import CreateJobPage from "./Pages/SingleJob/createSingleJob";
import { UserContext } from "./Context/User";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/Auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/Jobs" element={<AllJobs />} />
            -
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Profile/:id" element={<Profile />} />
            <Route path="/CreateJobPage" element={<CreateJobPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
