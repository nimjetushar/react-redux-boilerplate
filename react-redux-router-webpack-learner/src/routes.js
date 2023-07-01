import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/home/HomeComponent";
import NotFoundComponent from "./components/notfound/NotFoundComponent";

import Loadable from "react-loadable";
import CounterComponent from "./containers/counter/CounterComponent";
import ProductsComponent from "./containers/products/ProductsComponent";
import ManageProductComponent from "./containers/products/ManageProductComponent";

const AboutComponent = Loadable({
  loader: () => import("./components/about/AboutComponent"),
  loading: () => <div>Loading....</div>
});

export default (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/about" component={AboutComponent} />
    <Route path="/counter" component={CounterComponent} />
    <Route path="/products" component={ProductsComponent} />
    <Route path="/product/:id" component={ManageProductComponent} />
    <Route path="/product" component={ManageProductComponent} />
    <Route path="**" component={NotFoundComponent} />
  </Switch>
);
