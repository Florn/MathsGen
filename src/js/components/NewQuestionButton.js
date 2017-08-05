import React from "react";

export default class NewQuestionButton extends React.Component {  
  render() {
    return (
      <button onClick={this.props.onClick} class="btn btn-primary mt-4">New Question</button>
    );
  }
}
