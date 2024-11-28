import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import DashBoardLayout from "./pages/DashBoardLayout/DashBoardLayout";
import DashBoard from "./pages/DashBoardLayout/DashBoard";
import Interview from "./components/interview/Interview";
import StartInterview from "./components/interview/StartInterview";
import { Toaster } from "sonner";
import FeedbackContainer from "./pages/Feedback/FeedbackContainer";

function App() {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<DashBoardLayout />}>
        <Route path="/home/dashboard" element={<DashBoard />} />
        <Route path="/home/interview" element={<Interview />}/>
        <Route path="/home/interview/start" element={<StartInterview/>}/>
        <Route path="/home/interview/feedback" element={<FeedbackContainer/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
