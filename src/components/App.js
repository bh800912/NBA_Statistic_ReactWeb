import React, { Component } from 'react';
import {TopNavBar} from "./TopNavBar.js";
import { Main } from "./Main.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
          <Main/>
      </div>
    );
  }
}

export default App;
