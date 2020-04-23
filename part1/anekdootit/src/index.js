import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);
  const [selected, setSelected] = useState(0);
  const mostVotesIndex = points.indexOf(Math.max(...points));

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  const handleIncreaseVotes = () => {
    const tmp = [...points];

    tmp[selected] += 1;

    setPoints(tmp);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {props.anecdotes[selected]}
        <br />
        has {points[selected]} votes
      </p>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <button onClick={handleIncreaseVotes}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>
        {props.anecdotes[mostVotesIndex]}
        <br />
        has {points[mostVotesIndex]} votes
      </p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
