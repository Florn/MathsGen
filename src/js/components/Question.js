import React from "react";
import NewQuestionButton from './NewQuestionButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import DATA from './questions'
import PaperSelector from './PaperSelector';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionVersions: ['Solve the following integral: $$ \\int_{1}^{0} x^2  $$ Please show all your work.',
    'Solve the following integral: $$ \\int_{2}^{3} x^6  $$ Please show all your work.'],
    questionSelector: 1,
    versionSelector: 0,
    questionData: DATA,
    selectorList: Object.keys(DATA.questions)
    };
  }
  
  handlePaperChange = (event) => {
      event.preventDefault();
      this.setState({ questionSelector: event.target.value});
  }

  questionSelector = () => {
    return this.state.questionSelector;
  }

  componentDidUpdate() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }

  handleNewQClick = () => {
    let newState = this.state.questionSelector;
    newState += 1;
    newState = newState % this.state.questionVersions.length;
    this.setState({
      questionSelector: newState
    });
    console.log(this.state.questionSelector);
  }

  handleNextBtnClick = () => {
    let newState = this.state.versionSelector;
    newState += 1;
    newState = newState % this.state.questionVersions.length;
    this.setState({
      versionSelector: newState
    });
    console.log(this.state.versionSelector);
  }
  
  handlePreviousBtnClick = () => {
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
         <PaperSelector questionSelector={this.state.questionSelector}    handlePaperChange={this.handlePaperChange}  />
         </div>
      </div>
    );
  }

}