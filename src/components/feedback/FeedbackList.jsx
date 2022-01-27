import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackList = ({ handleClose }) => {
  const { feedback } = useContext(FeedbackContext);

  if (feedback.length === 0 || !feedback) {
    return <div>No Feedback to display!</div>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
