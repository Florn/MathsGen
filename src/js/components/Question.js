import React from "react";
import Button from './Button';
import DATA from './questions'
import PaperSelector from './PaperSelector';
import styled from 'styled-components';
import { colourStyle, styles } from './Styles'

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
    var maths_question = document.getElementsByClassName('maths-question');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub, maths_question]);
  }

  incrementQuestion = direction => {
    let newState = this.state.versionSelector;
    newState += direction;
    newState = newState % this.state.questionVersions.length;
    newState = newState * direction
    this.setState({
      versionSelector: newState
    });
    console.log("Version Selector: " + this.state.versionSelector);
  }

  render() {
    return (
        <div className="question card mt-4">
        <div className="card-header">Question</div>  
        <div className="card-block maths-question">
            {this.state.questionVersions[this.state.versionSelector]}
          </div>
          <div className="card-footer">
                <div className="btn-group mt-4">
                  <Button 
                    onClick={() => this.incrementQuestion(-1)} 
                    text={"Previous"}
                    class="btn btn-outline-primary"
                    style={styles.previousButton}
                  />
                  <Button 
                    onClick={() => this.incrementQuestion(1)} 
                    text={"Next"}
                    class="btn btn-outline-primary"
                    style={styles.nextButton}
                  />
              </div>
            <PaperSelector questionSelector= {this.state.questionSelector} 
              handlePaperChange={this.handlePaperChange}
              questionsArray={this.state.selectorList}
              />
            </div>
          </div>
    );
  }

}