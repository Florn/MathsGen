import React from "react";
function curlyStart() {
  return '{'
}

function curlyEnd() {
  return '}'
}


export default class Question extends React.Component {

  render() {
    return (
      <div>
      <p>Define how many apples John has where Mary is cycling away from a giant spinning apple at a rate of 5 m/s and where the apple is red. </p>
      <div className="maths">{'$$ { a } $$'}</div>
      </div>
    );
  }
}
