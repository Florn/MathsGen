import React from "react";

export default class PaperSelector extends React.Component {  
  constructor(props) {
      super(props);
      this.state = {selected: 'A'};
  }

  handleChange = (event) => {
      this.setState({selected: event.target.value});
      console.log("Paper Selected: " + this.state.selected)
  }

render() {
    return (
        <div class="mt-4">
        <h4>Select Paper:</h4>
        <select class="form-control" onChange={this.handleChange} value={this.state.selected}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <h5 class="mt-3">Paper Selected: {this.state.selected}</h5>
        </div>
        );
  }
}
