import React from "react";

const Option = ({ option, onRemoveOption, count }) => (
  <li className="option">
    <p className="option__text">{count}. {option}</p>
    <button
      className="button button--link"
      onClick={() => onRemoveOption(option)}>
      remove
    </button>
  </li>
);


export default Option;