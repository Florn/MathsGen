import React from "react";
import styled from 'styled-components';
import colourStyle from './Styles'

const Button = styled.button`
  // border-radius: 3px;
  // padding: 0.25em 1em;
  // background: transparent;
  // color: ${colourStyle[1]} ;
  // border: .5px solid ${colourStyle[1]} ;
  `

export default class NextButton extends React.Component {  
  render() {
    return (
      <Button onClick={this.props.onClick} class="btn btn-outline-primary">Next</Button>
    );
  }
}

