import React, { Component } from "react";

import ReactDOM from "react-dom";

export default class Portal extends Component {
  el = document.createElement("div").setAttribute("id", "portal");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.replaceChild(this.el, this.props.children);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
