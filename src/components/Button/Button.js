import React, { Component } from "react";

export default class Button extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}
