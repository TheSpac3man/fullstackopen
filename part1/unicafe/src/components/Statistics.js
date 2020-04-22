import React from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <div>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {(good * 1 + bad * -1) / (good + neutral + bad)}</div>
    </div>
  );
};

export default Statistics;
