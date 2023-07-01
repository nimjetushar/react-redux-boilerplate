import React from "react";
import ReactDOM from "react-dom";

import RootComponent from "./components/RootComponent";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
