import React from "react";

import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;

  if (!good && !neutral && !bad) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={(good * 1 + bad * -1) / all} />
            <StatisticLine text="positive" value={(good / all) * 100 + " %"} />
          </tbody>
        </table>
      </div>
    );
  }
};

export default Statistics;
