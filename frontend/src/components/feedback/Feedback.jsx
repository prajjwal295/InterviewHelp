import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDownUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Feedback({ feedbacklist }) {
  const navigate = useNavigate();

  return (
    <div className="p-10 ">
      <h2 className="text2xl font-bold text-green-500">Congratulations</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      <h2 className="text-blue-700 text-lg my-3">
        <strong>
          <h2 className="text-sm text-gray-500">
            Find below interview question with correct answer with you feeback
          </h2>
        </strong>
      </h2>
      {feedbacklist &&
        feedbacklist.map((item, index) => {
          return (
            <Collapsible key={index}>
              <CollapsibleTrigger className="p-2 bg-gray-300 rounded-lg my-2 text-left flex gap-7 justify-between w-full">
                {item?.question}
                <ChevronsDownUp className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg">
                    <strong>Rating :</strong>
                    {item?.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 text-sm">
                    <strong>Your Answer:</strong>
                    {item?.answer}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-500">
                    <strong>Correct Answer:</strong>
                    {item?.correctanswer}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-500">
                    <strong>Feedback:</strong>
                    {item?.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}

      <Button onClick={() => navigate("/home/dashboard")}>Go Home</Button>
    </div>
  );
}

export default Feedback;
