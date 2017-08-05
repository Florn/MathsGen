import React from "react";

export default class PreviousButton extends React.Component {  
  render() {
    return (
      <button onClick={this.props.onClick} class="btn btn-default">Previous</button>
    );
  }
}
