import React, { useState, useEffect } from 'react';
import InterviewItemCard from './InterviewItemCard';

const dummyData = [
  {
    mockId: '1',
    jobPosition: 'Software Engineer',
    jobExperience: '2+ Years',
    createdAt: '2024-11-01T10:00:00Z',
  },
  {
    mockId: '2',
    jobPosition: 'Frontend Developer',
    jobExperience: '1-3 Years',
    createdAt: '2024-11-05T14:30:00Z',
  },
  {
    mockId: '3',
    jobPosition: 'Backend Developer',
    jobExperience: '3-5 Years',
    createdAt: '2024-11-10T08:45:00Z',
  },
];

function InterviewList() {
  const [interviewList, setInterviewList] = useState([]);

  const GetInterviewList = () => {
    console.log('Using dummy data:', dummyData);
    setInterviewList(dummyData);
  };

  useEffect(() => {
    GetInterviewList();
  }, []);

  return (
    <div className='mt-10'>
      <h2 className="font-medium text-xl mb-5">Previous Mock Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interviewList && interviewList.map((interview, index) => (
          <InterviewItemCard interview={interview} key={index} />
        ))}
      </div>
    </div>
  );
}

export default InterviewList;
