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
    let newState = this.state.questionSelector;
    newState += 1;
    newState = newState % this.state.questionVersions.length;
    this.setState({
      questionSelector: newState
    });
    console.log(this.state.questionSelector);
  }

  handleNextBtnClick() {
    let newState = this.state.versionSelector;
    newState += 1;
    newState = newState % this.state.questionVersions.length;
    this.setState({
      versionSelector: newState
    });
    console.log(this.state.versionSelector);
  }
  handlePreviousBtnClick() {
    let newState = this.state.versionSelector;
    newState -= 1;
    newState = -(newState % this.state.questionVersions.length);
    this.setState({
      versionSelector: newState
    });
    console.log(this.state.versionSelector);
  }
  

  render() {
    return (
      <div>
        <div className="maths mt-4">{this.state.questionVersions[this.state.versionSelector]}</div>
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