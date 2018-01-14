import "./Platform.css";
import React from "react";

function template(
  changeDetector,
  logout,
  publicKey,
  privateKey
) {
  return (
    <div className="platform">
      <button onClick={ logout.bind(this) }>logout</button>
      <h1>Platform</h1>

      <h4>Public Key:</h4>
      <h6>{ publicKey }</h6>

      <h4>Private Key:</h4>
      <h6>{ privateKey }</h6>
    </div>
  );
};

export default template;
