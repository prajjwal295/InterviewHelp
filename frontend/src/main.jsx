import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authcontext";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import JobProvider from "./context/jobcontext";
import  FeedbackProvider  from "./context/feedbackcontext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <JobProvider>
          <FeedbackProvider>
          <App />
          </FeedbackProvider>
        </JobProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
