import React, { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";
import QuestionSection from "./QuestionSection";
import RecordAnswerSection from "./RecordAnswerSection";
import { Button } from "../ui/button";

function StartInterview() {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]); // Initialize as empty array
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const getInterviewDetails = async () => {
    // Fetch interview details logic here
    // Example mock data for testing
    const mockData = [
      { Question: "What is React?" },
      { Question: "Explain closures in JavaScript?" },
      { Question: "What is the virtual DOM?" },
    ];
    setMockInterviewQuestion(mockData);
  };

  // Fetch data on component mount
  useEffect(() => {
    getInterviewDetails();
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <QuestionSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        setActiveQuestionIndex={setActiveQuestionIndex}
      />

      <RecordAnswerSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
      />
    </div>
    <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}
        {activeQuestionIndex < mockInterviewQuestion?.length - 1 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}
        {activeQuestionIndex == mockInterviewQuestion?.length - 1 && <Button >End Interview</Button>}
    </div>
    </>
  );
}

export default StartInterview;
