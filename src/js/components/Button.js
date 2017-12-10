import React from "react";
import styled from 'styled-components';
import colourStyle from './Styles'

const StyledButton = styled.button
  `
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: #6A5ACD ;
  border: .5px solid #6A5ACD ;
  `



export default class Button extends React.Component {  
  render() {
    return (
      <button 
        onClick={this.props.onClick} 
        class={this.props.class}
        style={this.props.style}
      >
        {this.props.text}
      </button>
    );
  }
}

