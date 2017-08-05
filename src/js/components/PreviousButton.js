import React from "react";

export default class PreviousButton extends React.Component {  
  getPrevious() {
    console.log('Previous button pressed.');
  }
  render() {
    return (
      <button onClick={this.getPrevious} class="btn btn-default">Previous</button>
    );
  }
}
