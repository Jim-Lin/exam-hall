import React from 'react';
import { connect } from 'react-redux'
import { setCountDown } from '../actions'
import QuestionList from '../components/QuestionList';

const mapStateToProps = state => ({
  start: state.countDown
})

const mapDispatchToProps = dispatch => ({
  onStart: () => dispatch(setCountDown(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)
