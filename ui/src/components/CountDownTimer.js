import React from 'react';

export default class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time * 60,
      showTime: null
    };

    this.cleanup = this.cleanup.bind(this);
  }

  cleanup() {
    this.props.onStop();
    clearInterval(this.interval);
  }

  tick() {
    this.setState(prevState => {
      if (prevState.time == 0) {
        this.cleanup();
        this.props.onSubmit();
      }

      let m = ((prevState.time / 60) >> 0);
      let s = (prevState.time % 60);

      return {
        showTime: `${("00" + m).slice(-3)}:${("0" + s).slice(-2)}`,
        time: prevState.time - 1
      }
    });
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.tick(), 1000);
  // }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    this.cleanup();
  }

  render() {
    return this.state.showTime;
  }
}
