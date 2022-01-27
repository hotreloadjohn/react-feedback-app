import React, { useContext } from "react";
import Card from "../Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleClose, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleClose(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="green" />
      </button>
      <div className="card-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
