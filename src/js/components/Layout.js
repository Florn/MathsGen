import React from "react";
import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer"


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header title="MathsGen"/>
        <div className="container">
          <Question />
        </div>
        <Footer />
      </div>
    );
  }
}
