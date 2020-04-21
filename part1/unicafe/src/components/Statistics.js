import React from "react";

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
    </div>
  );
};

export default Statistics;
