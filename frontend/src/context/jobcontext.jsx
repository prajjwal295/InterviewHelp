import { initialDialogFormData } from "@/config/config";
import { createContext, useEffect, useState } from "react";
import { chatSession } from "@/services/Gemini";

export const JobContext = createContext(null);

export default function JobProvider({ children }) {
  const [dialogFormData, setDialogFormData] = useState(initialDialogFormData);
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState({});

  const handleDialogSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const QuestionCount = 5;
    const InputPrompt = `Job Position: ${dialogFormData.jobRole}, Job Description: ${dialogFormData.jobDescription}, Years of Experience: ${dialogFormData.jobExperience}. Generate ${QuestionCount} interview questions with answers in JSON format.`;

    console.log("Prompt:", InputPrompt);

    try {
      console.log("Sending to AI:", InputPrompt);

      const result = await chatSession.sendMessage(InputPrompt);
      const MockJsonResp = await result.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      const parsedResponse = JSON.parse(MockJsonResp);
      setJsonResponse(parsedResponse);

      const createInterviewResponse = await createInterview({
        jsonMockResp: parsedResponse,
        jobPosition: jobRole,
        jobDescription: jobDescription,
        jobExperience: jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error during submission:", error);
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        dialogFormData,
        setDialogFormData,
        handleDialogSubmit,
        loading,
        jsonResponse,
        setJsonResponse,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
