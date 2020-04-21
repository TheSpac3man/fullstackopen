import React from "react";

const Feedback = (props) => {
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={props.handleGood}>good</button>
      <button onClick={props.handleNeutral}>neutral</button>
      <button onClick={props.handleBad}>bad</button>
    </div>
  );
};

export default Feedback;
