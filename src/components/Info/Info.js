import React, { Component } from "react";

export default class Info extends Component {
  state = { value: "Test value", with: 0 };

  componentDidMount() {
    this.handleChangeTitle();
    window.addEventListener("resize", this.handleWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleChangeTitle();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWidth);
  }

  handleChangeTitle = () => {
    document.title = this.state.value;
  };

  handleWidth = () => {
    this.setState({
      with: window.innerWidth,
    });
  };

  render() {
    return <h1>{this.state.with}</h1>;
  }
}
