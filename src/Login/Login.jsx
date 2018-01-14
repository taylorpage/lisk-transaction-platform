import "./Login.css";
import React from "react";

function template(
  changeDetector,
  signIn
) {
  return (
    <div className="login">
      <img className="logo" alt="lisk" src={ require("../assets/lisk.png") }></img>
      <h1 className="label">Login</h1>
      <input 
        type="text"
        className="login-input"
        placeholder="Pass Phrase"
        onChange={ 
          (elem) => changeDetector.bind(this, elem, 'passphrase')() 
        }>
      </input>
      <button className="login-button" onClick={ signIn.bind(this) }>Sign In</button>
    </div>
  );
};

export default template;
