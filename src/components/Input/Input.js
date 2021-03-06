import React from "react";

export const Input = ({ onChange, value, onKeyPress }) => {
  return (
    <div className="inputWrapper">
      <i className="fas fa-search" />
      <input
        className="input"
        placeholder="Click to search"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
  value: "",
  onKeyPress: () => {},
};
