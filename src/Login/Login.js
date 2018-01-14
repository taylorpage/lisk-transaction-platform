import React    from "react";
import template from "./Login.jsx";

import bip39 from 'bip39';

class Login extends React.Component {
  
  lisk = window.lisk;
  bip39 = bip39;

  constructor(props) {
    super(props);
    this.state = {
      passphrase: ''
    }
    console.log('hello');

    // User is already signed in redirect to the platform
    if (localStorage.getItem('publicKey')) {
      this.props.history.push('/platform');
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
    const seedHex = this.generateSeedHex(this.state.passphrase);
    const keys = this.lisk.crypto.getAddress(seedHex);

    // Set keys on the state
    this.setState({
      privateKey: keys.privateKey,
      publicKey: keys.publicKey
    }, function() {
      localStorage.setItem('publicKey', keys.publicKey);
      this.props.history.push('/platform');
    })
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
