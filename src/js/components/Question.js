import React from "react";
import NewQuestionButton from './NewQuestionButton'

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionVersions: ['Solve the following integral: $$ \\int_{1}^{0} x^2  $$ Please show all your work.',
    'Solve the following integral: $$ \\int_{2}^{3} x^6  $$ Please show all your work.']};
  }
  render() {
    return (
      <div>
      <div className="maths">{this.state.questionVersions[0]}</div>
      <NewQuestionButton onClick={this.handleNewQClick}/>

      </div>
    );
  }
  handleNewQClick() {
    alert('Get new question button pressed.');
  }
}