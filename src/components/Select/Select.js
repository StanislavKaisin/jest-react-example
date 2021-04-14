import React from "react";

export const Select = ({ options, handleChange, value }) => {
  return (
    <div className="selectWrapper">
      {options?.length > 0 ? (
        <>
          <select onChange={handleChange} defaultValue={value}>
            {options.map(({ value, label }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>{" "}
        </>
      ) : (
        <div className="placeholder">"No items"</div>
      )}
    </div>
  );
};

Select.defaultProps = {
  handleChange: () => "Test",
  options: [],
  value: 0,
};
