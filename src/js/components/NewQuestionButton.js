import React from "react";

export default class NewQuestionButton extends React.Component {  
  getNewQuestion() {
    alert('Get new question button pressed.');
  }
  render() {
    return (
      <button onClick={this.getNewQuestion} class="btn btn-primary">New Question</button>
    );
  }
}
