import React, { Component } from "react";
import {
  Navbar,
  Footer,
  Landing1,
  Landing2,
  Landing3,
} from "./Components/layouts/index.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-Content">
          <div className="App-Header">
            <Navbar />
          </div>
          <div className="App-Main">
            <Landing1 />
            <Landing2 />
            <Landing3 />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
