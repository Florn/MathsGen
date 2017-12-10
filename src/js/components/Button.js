import React from "react";
import styled from 'styled-components';
import colourStyle from './Styles'

const StyledButton = styled.button
  `
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: ${colourStyle[1]} ;
  border: .5px solid ${colourStyle[1]} ;
  `

export default class Button extends React.Component {  
  render() {
    return (
      <StyledButton onClick={this.props.onClick} class="btn btn-outline-primary">
        {this.props.text}
      </StyledButton>
    );
  }
}

