import React from "react";

export default class AddNewQuestion extends React.Component {  
  constructor(props) {
      super(props);
  }

render() {
    return (
        <button class="mt-2 btn btn-default" onClick={this.props.onClick}>Add New Question</button>
    );
  }
}
