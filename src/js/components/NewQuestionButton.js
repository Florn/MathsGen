import React from "react";

export default class NewQuestionButton extends React.Component {
constructor(props) {
    super(props);
    this.getNewQuestion = this.getNewQuestion.bind(this);
  }
  
  getNewQuestion() {
    alert('GEt New Question');
    console.log("Get new question button pressed.");
  }
  render() {
    return (
      <button onClick="{this.getNewQuestion}" class="btn btn-primary">New Question</button>
    );
  }
}
