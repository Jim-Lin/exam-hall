import React from 'react';
import { connect } from 'react-redux'
import { setCountDown } from '../actions'
import CountDownTimer from '../components/CountDownTimer'

const mapStateToProps = state => ({
  start: state.countDown
})

const mapDispatchToProps = dispatch => ({
  onStop: () => dispatch(setCountDown(false))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountDownTimer)
