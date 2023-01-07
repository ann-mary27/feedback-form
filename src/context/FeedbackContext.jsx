import { useState, createContext, useEffect } from "react";
const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedbackData] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });
  useEffect(() => {
    fetchData().then(() => setIsLoading(false));
  }, []);

  // to fetch data
  const fetchData = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedbackData(data);

  }



  // to add feedback
  const addFeedback = async (item) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    const data = await response.json();

    setFeedbackData([data, ...feedback]);
  };

  //delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {

      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  };

  //editfeedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // to update feedback
  const updateFeedback = async (id, newfeed) => {
    // setFeedbackEdit(item: newfeed, false )
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newfeed)

    });
    const data = await response.json();
    setFeedbackData(
      feedback.map((item) =>( id === item.id ? { ...item, ...data } : item))
    )
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
