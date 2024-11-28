import Feedback from '@/components/feedback/Feedback';
import { FeedbackContext } from '@/context/feedbackcontext';
import React, { useContext } from 'react'

function FeedbackContainer() {

    const {feedback} = useContext(FeedbackContext); 

  return (
    <>
        <Feedback feedbacklist={feedback}/>
    </>
  )
}

export default FeedbackContainer