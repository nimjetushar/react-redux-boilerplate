import * as actionTypes from "./actionTypes";
import productsAPIClient from "../api/productsAPIClient";

function loadProductsSuccess(products) {
  return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: products };
}

function insertProductSuccess(product) {
  return { type: actionTypes.INSERT_PRODUCT_SUCCESS, payload: product };
}

function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function loadProducts() {
  return function(dispatch) {
    return productsAPIClient
      .getAllProducts()
      .then(products => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function insertProduct(product) {
  return function(dispatch) {
    return productsAPIClient
      .insertProduct(product)
      .then(insertedProduct => {
        dispatch(insertProductSuccess(insertedProduct));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function updateProduct(product) {
  return function(dispatch) {
    return productsAPIClient
      .updateProduct(product)
      .then(updatedProduct => {
        dispatch(updateProductSuccess(updatedProduct));
      })
      .catch(err => {
        throw err;
      });
  };
}
