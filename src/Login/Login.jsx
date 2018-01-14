import "./Login.css";
import React from "react";

function template(
  changeDetector,
  signIn
) {
  return (
    <div className="login">
      <h1>Login</h1>
      <input 
        type="text"
        onChange={ 
          (elem) => changeDetector.bind(this, elem, 'passphrase')() 
        }>
      </input>
      <button onClick={ signIn.bind(this) }>Sign In</button>
    </div>
  );
};

export default template;
