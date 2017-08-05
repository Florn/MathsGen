import React from "react";

export default class PaperSelector extends React.Component {  
  constructor(props) {
      super(props);
      this.state = { selected: ''}
  }

//   handleChange = (event) => {
//       this.setState({selected: event.target.value});
//       console.log("Paper Selected: " + this.state.selected)
//   }

    handleSubmit = (event) => {
        event.preventDefault();
    }
render() {
    return (
        <div class="mt-4">
        <h4>Select Paper:</h4>
        <select class="form-control" onChange={this.props.handlePaperChange} value={this.state.value}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        </div>
        );
  }
}
