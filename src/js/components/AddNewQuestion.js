import React from "react";

import colourStyle from './Styles'
import styled from 'styled-components';

const Button = styled.button

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
