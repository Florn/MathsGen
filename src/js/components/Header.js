import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-faded">
        <Title title={this.props.title} />
      </nav>
    );
  }
}