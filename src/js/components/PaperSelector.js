import React from "react";



export default class PaperSelector extends React.Component {  

createSelectItems(){
  var items = []
  for(let i = 0; i <= this.props.questionsArray.length; i++) {             
    items.push(<option key={i} value={this.props.questionsArray[i]}>{this.props.questionsArray[i]}</option>)
    };

  return items

}

  render() {
    return (
      <div class="mt-4">
      <h4>Select Paper:</h4>
      <select class="form-control" onChange={this.props.handlePaperChange} value={this.props.questionSelector}>
        {this.createSelectItems()}
      </select>
      <h3>Paper Selected: {this.props.questionSelector}</h3>
      </div>
    );
  }
}
