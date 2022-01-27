import React, { useContext, useEffect, useState } from "react";
import Card from "../Card";
import FeedbackRating from "./FeedbackRating";
import FeedbackContext from "../../context/FeedbackContext";
import { FaEdit } from "react-icons/fa";

const Feedbackform = () => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState(10);
  const [isBtnDisabled, setisBtnDisabled] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const { handleAddFeedback, editFeedback, handleUpdateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit) {
      setInputText(editFeedback.item.text);
      setisBtnDisabled(false);
    }
  }, [editFeedback]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editFeedback.edit) {
      handleUpdateFeedback(editFeedback.item.id, {
        text: inputText,
        rating,
      });
    } else {
      handleAddFeedback({
        text: inputText,
        rating,
      });
    }
    setInputText("");
  };

  const handleOnChange = (e) => {
    let text = e.target.value;

    if (text.trim().length >= 10) {
      setisBtnDisabled(false);
      setErrMsg(null);
    } else {
      setisBtnDisabled(true);
      setErrMsg("Feedback msg must be more than 10 characters.");
    }

    setInputText(text);
  };
  return (
    <Card>
      {editFeedback.edit && <FaEdit color="green" fontSize={32} />}
      <h2>How do you rate your service with us?</h2>
      <FeedbackRating setRating={setRating} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="input"
            type="text"
            placeholder="Write a review"
            value={inputText}
            onChange={handleOnChange}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isBtnDisabled}
          >
            Submit
          </button>
        </div>
        {errMsg && <div className="message">{errMsg}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
