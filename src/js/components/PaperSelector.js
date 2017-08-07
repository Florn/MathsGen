import React from "react";
import styled from 'styled-components';
import colourStyle from './Styles'

const Select = styled.select`
  // border-radius: 3px;
  // background: transparent;
  // color: ${colourStyle[1]} ;
  // border: .5px solid ${colourStyle[1]};
  // align-content: center;
  `
  
function thisworks() {
  console.log(colourStyle[0])
};
thisworks();
  
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
        <Select class="form-control" onChange={this.props.handlePaperChange} value={this.props.questionSelector}>
          {this.createSelectItems()}
        </Select>
        <h></h>
        {/*<h5 class="mt-2">Paper Selected: {this.props.questionSelector}</h5>*/}
      </div>
    );
  }
}
