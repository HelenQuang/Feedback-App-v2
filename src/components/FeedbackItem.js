import React from "react";
import Card from "./Card";
import { FaTimes, FaEdit } from "react-icons/fa";

const FeedbackItem = ({ key, item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(key)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
