import React from "react";
import NewQuestionButton from './NewQuestionButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionVersions: ['Solve the following integral: $$ \\int_{1}^{0} x^2  $$ Please show all your work.',
    'Solve the following integral: $$ \\int_{2}^{3} x^6  $$ Please show all your work.']};
  }
  render() {
    return (
      <div>
        <div className="maths mt-4">{this.state.questionVersions[0]}</div>
          <div className="btn-group mt-4">
           <PreviousButton />
           <NextButton />
         </div>
         <div>
          <NewQuestionButton />
         </div>
      </div>
    );
  }
}