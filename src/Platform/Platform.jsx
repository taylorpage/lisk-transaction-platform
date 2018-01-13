import "./Platform.css";
import React from "react";

function template(
  changeDetector,
  test
) {
  return (
    <div className="platform">
      <h1>Platform</h1>
      <input
        type="text"
        onChange={
          (elem) => changeDetector.bind(this, elem, 'address')()
        }>
      </input>
      <button onClick={test.bind(this)}>Find Account</button>
    </div>
  );
};

export default template;
