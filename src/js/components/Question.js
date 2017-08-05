import React from "react";
import NewQuestionButton from './NewQuestionButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionVersions: ['Solve the following integral: $$ \\int_{1}^{0} x^2  $$ Please show all your work.',
    'Solve the following integral: $$ \\int_{2}^{3} x^6  $$ Please show all your work.'],
    questionSelector: 0,
    versionSelector: 0};
    // this.handleNewQClick = this.handleNewQClick.bind(this);
    // this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
    // this.handlePreviousBtnClick = this.handlePreviousBtnClick.bind(this);
  }

  handleNewQClick() {
    this.state.questionSelector += 1;
    console.log(this.state.questionSelector);
  }

  handleNextBtnClick() {
    this.state.versionSelector += 1;
    console.log(this.state.versionSelector);
  }
  handlePreviousBtnClick() {
    this.state.versionSelector -= 1;
    console.log(this.state.versionSelector);
  }
  

  render() {
    return (
      <div>
        <div className="maths mt-4">{this.state.questionVersions[0]}</div>
          <div className="btn-group mt-4">
           <PreviousButton onClick={this.handlePreviousBtnClick} />
           <NextButton onClick={this.handleNextBtnClick} />
         </div>
         <div>
         <NewQuestionButton onClick={this.handleNewQClick}/>
         </div>
      </div>
    );
  }

}