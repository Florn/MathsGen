import React from "react";
import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";
import PaperSelector from "./PaperSelector";
import AddNewQuestion from "./AddNewQuestion";
import styled from 'styled-components';
import colourStyle from './Styles'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 1,
      maxQuestions: 6,
      children : []
    };
  }
  
  componentDidUpdate() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }
  
  addNewQuestion = () => {
    if (this.state.numQuestions < this.state.maxQuestions) {
    this.setState({
      numQuestions: this.state.numQuestions += 1
    })} else{
    alert("There is a maximum of " + this.state.maxQuestions + " questions per page.")
    };
  }
  
  getQuestions = () => {
    if (this.state.numQuestions <= this.state.maxQuestions) {
      for (var i = this.state.numQuestions; i <= this.state.numQuestions; i +=1) {
        this.state.children.push(<Question key={i} />)
        this.state.children.push(<br key={i+10}></br>)
      }
    return this.state.children} else {
      alert("There is a maximum of " + this.state.maxQuestions + " questions per page.")
      return this.state.children
    }
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
