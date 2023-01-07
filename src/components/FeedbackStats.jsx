import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const average = (
    feedback.reduce((sum, elem) => sum + elem.rating, 0) / feedback.length
  )
    .toFixed(1)
    .replace(".0", "");

  return (
    <div className="feedback-stats">
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
      <h4>Total Reviews: {feedback.length}</h4>
    </div>
  );
}

export default FeedbackStats;
