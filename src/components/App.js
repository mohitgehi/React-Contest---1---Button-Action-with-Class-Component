import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    text: "",
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={() => {
            this.setState(
              (text: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
            );
          }}
        >
          <p id="para">{text}</p>
        </button>
      </div>
    );
  }
}

export default App;
