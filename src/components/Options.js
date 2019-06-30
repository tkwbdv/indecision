import React from "react";
import Option from "./Option";

const Options = ({ hasOptions, options, onRemoveAll, onRemoveOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        disabled={!hasOptions}
        onClick={onRemoveAll}>Remove All</button>
    </div>

    {!hasOptions && <p className="widget__message">Please add an option to get started</p>}

    {options.map((option, index) =>
      <Option
        key={option}
        option={option}
        count={index + 1}
        onRemoveOption={onRemoveOption} />)}
  </div>
);


export default Options;