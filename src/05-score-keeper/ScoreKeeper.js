import { useEffect, useState } from "react";

export default function ScoreKeeper() {
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("Score")) || 0
  );

  useEffect(() => localStorage.setItem("Score", score), [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
}

// Examples of using localStorage:
//  localStorage.setItem("testA","AndrewG")
//  localStorage.getItem("testA")
