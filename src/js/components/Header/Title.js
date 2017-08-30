import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <div>
      <a class="navbar-brand">{this.props.title}</a>
      <div class="bar"></div>
      </div>
    );
  }
}
