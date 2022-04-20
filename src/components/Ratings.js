import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Ratings = ({ select }) => {
  const [selectedNum, setSelectedNum] = useState(10);
  const { editedFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    setSelectedNum(editedFeedback.item.rating);
  }, [editedFeedback]);

  const handleChange = (e) => {
    select(+e.currentTarget.value);
    setSelectedNum(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selectedNum === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selectedNum === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selectedNum === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selectedNum === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selectedNum === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleChange}
          checked={selectedNum === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleChange}
          checked={selectedNum === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleChange}
          checked={selectedNum === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleChange}
          checked={selectedNum === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleChange}
          checked={selectedNum === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default Ratings;
