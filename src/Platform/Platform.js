import React    from "react";
import template from "./Platform.jsx";

class Platform extends React.Component {

  constructor(props) {
    super();

    this.state = {
      address: ''
    }

    // Set to lisk test net
    this.setTestnet();
  }
  
  lisk = window.lisk;

  // Sets lisk to test environment
  setTestnet() {
    this.lisk.api().setTestnet(true);
  }

  // Sets the state when form changes
  detectFormChanges(elem, prop) {
    const state = {};
    state[prop] = elem.target.value;
    this.setState(state);
  }

  // test subbmit functionality
  test() {
    console.log(this.state.address);
  }

  render() {
    return template.call(
      this,
      this.detectFormChanges,
      this.test
    );
  }
}

export default Platform;
