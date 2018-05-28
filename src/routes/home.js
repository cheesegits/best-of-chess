import React, { Component } from "react";

import Header from "../components/header";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">Home route</p>
      </div>
    );
  }
}

export default Home;
