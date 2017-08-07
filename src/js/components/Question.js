import React from "react";
import NewQuestionButton from './NewQuestionButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import DATA from './questions'
import PaperSelector from './PaperSelector';
import styled from 'styled-components';
import colourStyle from './Styles'

const Wrapper = styled.section`
	// padding: .5em .5em .5em .5em;
  // border: .5px solid ${colourStyle[1]} ;
	// background: 	${colourStyle[0]} ;
  // align-content: center;
  // width: 300px;
  // border-radius: 5px;
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
        <div className="maths card mt-4">
          <div className="card-block">
            {this.state.questionVersions[this.state.versionSelector]}
          </div>
          <div className="card-block">
                <div className="btn-group mt-4">
                <PreviousButton onClick= {this.handlePreviousBtnClick} />
                <NextButton onClick= {this.handleNextBtnClick} />
              </div>
            <PaperSelector questionSelector= {this.state.questionSelector} 
              handlePaperChange= {this.handlePaperChange}
              questionsArray = {this.state.selectorList}
              />
            </div>
          </div>
    );
  }

}