import { useEffect, useState } from "react";
export default function RatingSelect({ select, rating }) {
  const [selected, setSelected] = useState(rating);

  const handleClick = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  useEffect(() => {
    setSelected(rating);
  }, [rating]);

  const list = [];
  for (let i = 1; i <= 10; i++) {
    list.push(
      <li key={i}>
        <input
          type="radio"
          value={i.toString()}
          id={`num${i}`}
          onChange={handleClick}
          checked={selected === i}
        />
        <label htmlFor={`num${i}`}>{i}</label>
      </li>
    );
  }
  return <ul className="rating">{list.map((elem) => elem)}</ul>;
}
