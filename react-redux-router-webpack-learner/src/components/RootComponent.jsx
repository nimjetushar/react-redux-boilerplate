import React, { Component } from "react";
import ErrorHandler from "./common/ErrorHandler";
import HeaderComponent from "./common/HeaderComponent";

class RootComponent extends Component {
  render() {
    return (
      <div>
        <ErrorHandler>
          <HeaderComponent />
        </ErrorHandler>
      </div>
    );
  }
}

export default RootComponent;
