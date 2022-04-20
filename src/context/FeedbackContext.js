import { useState, createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "Test from context", rating: 5 },
    { id: 2, text: "Test from context", rating: 6 },
    { id: 3, text: "Test from context", rating: 9 },
  ]);

  const [editedFeedback, setEditedFeedback] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setEditedFeedback({ item, edit: true });
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.random();
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        editFeedback,
        addFeedback,
        updateFeedback,
        editedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
