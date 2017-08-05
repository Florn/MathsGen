import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <a class="navbar-brand">{this.props.title}</a>
    );
  }
}
