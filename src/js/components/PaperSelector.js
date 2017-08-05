import React from "react";

export default class PaperSelector extends React.Component {  
  constructor(props) {
      super(props);
      this.state = { questionSelector: ''}
  }

//   handleChange = (event) => {
//       this.setState({selected: event.target.value});
//       console.log("Paper Selected: " + this.state.selected)
//   }

    
render() {
    return (
        <div class="mt-4">
        <h4>Select Paper:</h4>
        <select class="form-control" onChange={this.props.handlePaperChange} value={this.state.questionSelector}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </div>
        );
  }
}
