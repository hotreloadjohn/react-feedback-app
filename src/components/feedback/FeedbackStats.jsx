import React, { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const calAvgRating = () => {
    const totalRating = feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0);
    const avgRating = totalRating / feedback.length;

    return isNaN(avgRating) ? 0 : avgRating.toFixed(2);
  };

  //   let avgRating =
  //     feedback.reduce((acc, item) => {
  //       return acc + item.rating;
  //     }, 0) / feedback.length;

  //   avgRating = avgRating.toFixed(2);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {calAvgRating()}</h4>
    </div>
  );
};

export default FeedbackStats;
