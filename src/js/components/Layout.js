import React from "react";
import Question from "./Question";
import Header from "./Header";



export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <Header title="MathsGen"/>
        <Question />
      </div>
    );
  }
}
