import React, { createContext, useState, useContext } from "react";
import { chatSession } from "@/services/Gemini";
import { dummyFeedback } from "@/config/config";

export const FeedbackContext = createContext(null);

export default function FeedbackProvider({ children }) {
  const [jsonFeedback, setJsonFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback,setFeedback] = useState(dummyFeedback);

  const handleUserAnswer = async (question, userAnswer) => {
    setLoading(true);
    const feedbackPrompt = `Question: ${question}, User Answer: ${userAnswer}, Please give a rating for the answer and feedback (in JSON format with rating field and feedback field).`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);
      const responseText = await result.response.text();

      // Parse the response if it's a JSON response
      const MockJsonResp = responseText
        .replace("```json", "")
        .replace("```", "");
      const parsedResponse = JSON.parse(MockJsonResp);

      console.log(parsedResponse);

      setJsonFeedback(parsedResponse);
    } catch (error) {
      console.error("Error while fetching feedback:", error);
      alert("An error occurred while getting feedback.");
    } finally {
      setLoading(false); // Stop the loader after response is received or error occurs
    }
  };


  const getFeedback = () => {
    
  }

  return (
    <FeedbackContext.Provider
      value={{ jsonFeedback,feedback, loading, handleUserAnswer,getFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
