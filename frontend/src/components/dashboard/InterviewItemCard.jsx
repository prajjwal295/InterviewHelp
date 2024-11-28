import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function InterviewItemCard({ interview }) {
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary">
        {interview?.jobPosition || "Unknown Position"}
      </h2>

      <h2 className="text-sm text-gray-600">
        {interview?.jobExperience || "Experience Not Specified"}
      </h2>

      <h2 className="text-xs text-gray-400">
        Created At:{" "}
        {new Date(interview?.createdAt).toLocaleDateString() || "N/A"}
      </h2>

      <div className="flex justify-end mt-2 gap-5">
        <Link to={`/dashboard/interview/${interview?.mockId || ""}`}>
          <Button
            size="sm"
            variant="outline"
            className="w-full border rounded "
          >
            Feedback
          </Button>
        </Link>

        <Link>
          <Button
            size="sm"
            className="w-full bg-blue-500 text-white rounded "
          >
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewItemCard;
