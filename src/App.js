import React, { Component } from "react";
import BoxContainer from "./BoxContainer";

import "./App.css";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
