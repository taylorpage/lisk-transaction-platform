import "./Platform.css";
import React from "react";

function template(
  changeDetector,
  getKeysFromSecret,
  publicKey,
  privateKey
) {
  return (
    <div className="platform">
      <h1>Platform</h1>
      <h5>Get keys from your secret lisk pass phrase</h5>
      <input
        type="text"
        onChange={
          (elem) => changeDetector.bind(this, elem, 'passPhrase')()
        }>
      </input>
      <button onClick={ getKeysFromSecret.bind(this) }>Find Account</button>

      <h4>Public Key:</h4>
      <h6>{ publicKey }</h6>

      <h4>Private Key:</h4>
      <h6>{ privateKey }</h6>

    </div>
  );
};

export default template;
