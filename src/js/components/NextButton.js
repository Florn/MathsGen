import React from "react";
import styled from 'styled-components';


const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred
  `

export default class NextButton extends React.Component {  
  render() {
    return (
      <Button onClick={this.props.onClick} class="btn btn-default">Next</Button>
    );
  }
}

