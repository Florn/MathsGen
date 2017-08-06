import React from "react";
import colourStyle from './Styles'
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${colourStyle[1]} ;
  border: .5px solid ${colourStyle[1]};
  ;
    
  `

export default class PreviousButton extends React.Component {  
  render() {
    return (
      <Button onClick={this.props.onClick} class="btn btn-default">Previous</Button>
    );
  }
}
