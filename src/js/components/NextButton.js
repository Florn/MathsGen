import React from "react";

export default class NextButton extends React.Component {  
  render() {
    return (
      <button onClick={this.props.onClick} class="btn btn-default">Next</button>
    );
  }
}
