import React from "react";
import styled from 'styled-components';
import colourStyle from './Styles'

const Select = styled.select`
  // border-radius: 3px;
  // background: transparent;
  // color: #6A5ACD ;
  // border: .5px solid #6A5ACD;
  // align-content: center;
  `
  
  
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
        {/*<h4>Select Paper:</h4>*/}
        <Select class="form-control" 
          onChange={this.props.handlePaperChange} 
          value={this.props.questionSelector}
          style={this.props.style}
        >
          {this.createSelectItems()}
        </Select>
        <h></h>
        {/*<h5 class="mt-2">Paper Selected: {this.props.questionSelector}</h5>*/}
      </div>
    );
  }
}
