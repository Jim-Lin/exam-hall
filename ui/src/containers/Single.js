import React from 'react';
import { connect } from 'react-redux'
import { setAnswer } from '../actions'
import Single from '../components/Single';

const mapStateToProps = (state, ownProps) => (ownProps)

const mapDispatchToProps = dispatch => ({
  onChange: (id, value) => {
    console.log(id);
    console.log(value);
    return dispatch(setAnswer(
      {[id]: value}
    ));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)
