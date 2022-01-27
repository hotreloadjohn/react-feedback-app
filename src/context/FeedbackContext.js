import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "test from context",
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const handleClose = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAddFeedback = (review) => {
    let newFeedback = {
      // id: feedback.length === 0 ? 1 : feedback[feedback.length - 1].id + 1,
      id: uuidv4(),
      rating: review.rating,
      text: review.text,
    };
    setFeedback([...feedback, newFeedback]);
  };

  const handleEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const handleUpdateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );

    setEditFeedback({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleClose,
        handleAddFeedback,
        handleEdit,
        editFeedback,
        handleUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
