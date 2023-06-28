import React, { Component } from "react";
import { connect } from "react-redux";

import * as productActions from "../../actions/productActions";
import ProductList from "../../components/products/ProductListComponent";
import RedirectButton from "../../components/products/RedirectButton";

class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.loadClick = this.loadClick.bind(this);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  loadClick(e) {
    e.preventDefault();
    // this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <h1>Products Component</h1>
        {/* <button className="btn btn-info" onClick={this.loadClick}>Get All Products</button> */}
        <RedirectButton />
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.productReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: data => dispatch(productActions.loadProducts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsComponent);
