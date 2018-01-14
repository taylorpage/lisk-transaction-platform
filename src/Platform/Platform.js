import React    from "react";
import template from "./Platform.jsx";

import bip39 from 'bip39';

class Platform extends React.Component {
  
  lisk = window.lisk;
  bip39 = bip39;

  constructor(props) {
    super(props);

    this.state = {
      passPhrase: '',

      // Keys
      publicKey: '',
      privateKey: ''
    }

    // Redirect to login if user is not signed in
    if (!localStorage.getItem('publicKey')) {
      this.props.history.push('/login');
    }

    // Set to lisk test net
    // this.setTestnet();
  }
  

  // Sets lisk to test environment
  setTestnet() {
    this.lisk.api().setTestnet(true);
  }

  // Logs out of account
  logout() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  // Generates a seed hex from a passphrase
  generateSeedHex(mnemonic) {
    return bip39.mnemonicToSeedHex(mnemonic);
  }

  // Sets the state when form changes
  detectFormChanges(elem, prop) {
    const state = {};
    state[prop] = elem.target.value;
    this.setState(state);
  }

  // test subbmit functionality
  getKeysFromSecret() {
    const seedHex = this.generateSeedHex(this.state.address);
    const keys = this.lisk.crypto.getKeys(seedHex);

    // Set keys on the state
    this.setState({
      privateKey: keys.privateKey,
      publicKey: keys.publicKey
    });
  }

  render() {
    return template.call(
      this,
      this.detectFormChanges,
      this.logout,
      this.state.publicKey,
      this.state.privateKey
    );
  }
}

export default Platform;
