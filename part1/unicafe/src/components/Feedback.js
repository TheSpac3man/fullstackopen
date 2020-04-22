import React from "react";

import Button from "./Button";

const Feedback = (props) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={props.handleGood} text="good" />
      <Button handleClick={props.handleNeutral} text="neutral" />
      <Button handleClick={props.handleBad} text="bad" />
    </div>
  );
};

export default Feedback;
