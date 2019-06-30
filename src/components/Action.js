import React from "react";

const Actions = ({ hasOptions, onMakeDecision }) => (
  <div>
    <button
      className="big-button"
      disabled={!hasOptions}
      onClick={onMakeDecision}>What should I do?</button>

  </div>
);


export default Actions;