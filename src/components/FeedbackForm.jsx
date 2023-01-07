import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);
  const [rating, setRating] = useState(10);
  const [msg, setMsg] = useState(null);
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  );
  useEffect(() => {
    if (text !== undefined) {
      if (text === "" || text.trim().length < 10) {
        setDisable(true);
      } else {
        setDisable(false);
      }
      text !== "" && text.trim().length < 10
        ? setMsg("Must have 10 or more characters")
        : setMsg(null);
    }
  }, [text, rating]);
  const select = (rating) => {
    setRating(rating);
  };
  const handleText = (e) => {
    // button disabling at 8 when backspaced.

    setText(e.target.value.length === 0 ? "" : e.target.value);
  };
  useEffect(() => {
    if (feedbackEdit.edit) {
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
      setDisable(false);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!feedbackEdit.edit) {
            addFeedback({ rating, text });
          } else {
            const newfeed = {
              id: feedbackEdit.item.id,
              text,
              rating
            };

            updateFeedback(newfeed.id, newfeed);
          }
          setRating(10);
          setText("");
        }}
      >
        <h2>How would you review our service with you?</h2>
        <RatingSelect select={select} rating={rating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleText}
            value={text}
            placeholder="Your Review"
          />
          <Button type="submit" isDisabled={disable} version="primary">
            Send
          </Button>
        </div>
        {msg && <h5 className="message">{msg}</h5>}
      </form>
    </Card>
  );
}
