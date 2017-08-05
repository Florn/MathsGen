import React from "react";
import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";
import NewQuestionButton from "./NewQuestionButton";
import PaperSelector from "./PaperSelector";
import AddNewQuestion from "./AddNewQuestion";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0
    };
  }
  
  componentDidUpdate() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }
  
  addNewQuestion = () => {
    console.log("Add new question button pressed.")
    this.setState({
      numQuestions: this.state.numQuestions += 1
    });
    console.log('Number of questions: ' + this.state.numQuestions);
  }
  
  getQuestions = () => {
    const children = []
    for (var i = 0; i < this.state.numQuestions; i +=1) {
      children.push(<Question key={i}/>)
      console.log(children)
    }
    return children
  }

  render() {
    return (
      <div>
        <Header title="MathsGen"/>
        <div className="container">
          {this.getQuestions()}
          <AddNewQuestion onClick={this.addNewQuestion}/>

        </div>
        <Footer />
      </div>
    );
  }
}
