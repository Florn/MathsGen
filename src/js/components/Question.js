import React from "react";
import NewQuestionButton from './NewQuestionButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import DATA from './questions'
import PaperSelector from './PaperSelector';
import styled from 'styled-components';

const Wrapper = styled.section`
	padding: .5em;
  border: 2.5px solid palevioletred;
	background: papayawhip;
  margin: 200 200em;
`;

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionVersions: DATA.questions["Integration 2015 Paper 1"],
    questionSelector: 1,
    versionSelector: 0,
    questionData: DATA,
    selectorList: Object.keys(DATA.questions)
    };
  }
  
  handlePaperChange = (event) => {
      event.preventDefault();
      this.setState({ questionSelector: event.target.value,
      questionVersions: DATA.questions[event.target.value]});
      console.log("Paper Selected: " + this.state.questionSelector);
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
      <Wrapper>
        <div className="maths mt-4">{this.state.questionVersions[this.state.versionSelector]}</div>
        <div className="btn-group mt-4" >
          <PreviousButton onClick= {this.handlePreviousBtnClick} />
          <NextButton onClick= {this.handleNextBtnClick} />
        </div>
        <PaperSelector questionSelector= {this.state.questionSelector} 
          handlePaperChange= {this.handlePaperChange}
          questionsArray = {this.state.selectorList}
          />

      </Wrapper>
    );
  }

}