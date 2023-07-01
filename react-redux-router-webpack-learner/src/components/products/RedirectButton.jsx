import React from "react";
import { withRouter } from "react-router-dom";

const RedirectButton = withRouter(({ history }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        history.push("/product");
      }}
    >
      Add Product
    </button>
  );
});

export default RedirectButton;
