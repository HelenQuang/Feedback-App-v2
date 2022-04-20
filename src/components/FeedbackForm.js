import { useState, useContext, useEffect } from "react";
import Ratings from "./Ratings";
import Card from "./Card";
import Button from "./Button";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, editedFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editedFeedback.edit === true) {
      setBtnDisabled(false);
      setText(editedFeedback.item.text);
      setRating(editedFeedback.item.rating);
    }
  }, [editedFeedback]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    }
    if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(false);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = { text, rating };

      if (editedFeedback.edit === true) {
        updateFeedback(editedFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your service with us?</h2>

        <Ratings select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
