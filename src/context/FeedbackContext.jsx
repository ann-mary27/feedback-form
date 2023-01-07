import { useState, createContext } from "react";
import FeedbackData from "./../data/feedback";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedbackData] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  // to add feedback
  const addFeedback = (item) => {
    item.id = uuidv4();
    setFeedbackData([item, ...feedback]);
  };

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  };

  //editfeedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // tp update feedback
  const updateFeedback = (id, newfeed) => {
    // setFeedbackEdit(item: newfeed, false )
    setFeedbackData(
      feedback.map(function (toUpdate) {
        if (id === toUpdate.id) {
          toUpdate.text = newfeed.text;
          toUpdate.rating = newfeed.rating;
        }
        return toUpdate;
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
export default FeedbackContext;
