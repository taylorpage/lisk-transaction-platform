import React    from "react";
import template from "./Login.jsx";

import bip39 from 'bip39';

class Login extends React.Component {
  
  lisk = window.lisk;
  bip39 = bip39;

  constructor(props) {
    super();
    this.state = {
      passphrase: ''
    }
  }

  // Sets the state when form changes
  detectFormChanges(elem, prop) {
    const state = {};
    state[prop] = elem.target.value;
    this.setState(state);
  }

  // Generates a seed hex from a passphrase
  generateSeedHex(mnemonic) {
    return bip39.mnemonicToSeedHex(mnemonic);
  }

  // Signs in using pass phrase
  signIn() {
    console.log(this.state.passphrase);
    const seedHex = this.generateSeedHex(this.state.passphrase);
    const keys = this.lisk.crypto.getAddress(seedHex);

    console.log(keys);

    // Set keys on the state
    this.setState({
      privateKey: keys.privateKey,
      publicKey: keys.publicKey
    }, function() {
      
    });
  }

  render() {
    return template.call(
      this,
      this.detectFormChanges,
      this.signIn
    );
  }
}

export default Login;
