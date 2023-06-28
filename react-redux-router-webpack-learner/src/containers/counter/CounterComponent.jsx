import React, { Component } from "react";
import { connect } from "react-redux";

import * as counterActions from "../../actions/counterActions";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.incClick = this.incClick.bind(this);
    this.decClick = this.decClick.bind(this);
  }

  incClick(e) {
    e.preventDefault();
    this.props.inc();
  }

  decClick(e) {
    e.preventDefault();
    this.props.dec();
  }

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h2 className="text-info">Count: {this.props.count}</h2>
        <button className="btn btn-info" onClick={this.incClick}>
          +
        </button>
        <button className="btn btn-info" onClick={this.decClick}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    count: state.counterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: data => dispatch(counterActions.incCounter(data)),
    dec: data => dispatch(counterActions.decCounter(data))
  };
}

const fn = connect(
  mapStateToProps,
  mapDispatchToProps
);
const cc = fn(CounterComponent);

export default cc;