import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJobs from "./Pages/AllJobs/AllJobs";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
          <Route path="/Auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<AllJobs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
