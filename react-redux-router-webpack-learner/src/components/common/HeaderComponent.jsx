import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../routes";

const HeaderComponent = () => (
  <div>
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
    {Routes}
  </div>
);

export default HeaderComponent;
