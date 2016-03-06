import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { test } from '../actions/actions';

//components

class ReduxApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(test());
  }

  render() {
    const { dispatch, running } = this.props;

    return (
      <div>
        { running }
      </div>
    );
  }
}

function select(state) {
  return {
    running: state.running
  };
}

export default connect(select)(ReduxApp);
