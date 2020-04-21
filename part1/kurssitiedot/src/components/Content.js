import React from "react";

import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} amount={props.exercises1} />
      <Part name={props.part2} amount={props.exercises2} />
      <Part name={props.part3} amount={props.exercises3} />
    </div>
  );
};

export default Content;
