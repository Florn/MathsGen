import React from "react";
import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";
import NewQuestionButton from "./NewQuestionButton";
import PaperSelector from "./PaperSelector";

function getNewQuestion() {
  alert("New Question Time");
}

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header title="MathsGen"/>
        <div className="container">
          <Question />
        <PaperSelector />
          </div>
        <Footer />
      </div>
    );
  }
}
