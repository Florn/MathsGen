import React from "react";

import colourStyle from './Styles'
import styled from 'styled-components';

const Button = styled.button`
  // border-radius: 3px;
  // padding: 0.25em 1em;
  // margin: 0 0em;
  // background: transparent;
  // color: ${colourStyle[1]} ;
  // border: .5px solid ${colourStyle[1]};
  `

export default class AddNewQuestion extends React.Component {  
  constructor(props) {
      super(props);
  }

render() {
    return (
        <Button class="mt-2 btn btn-outline-primary btn-lg" onClick={this.props.onClick}>Add New Question</Button>
    );
  }
}
