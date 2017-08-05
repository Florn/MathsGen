import React from "react";

export default class NextButton extends React.Component {  
  getNext() {
    console.log('Next button pressed.');
  }
  render() {
    return (
      <button onClick={this.getNext} class="btn btn-default">Next</button>
    );
  }
}
