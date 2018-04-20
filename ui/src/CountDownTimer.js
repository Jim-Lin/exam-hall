import React from 'react';

export default class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time * 60,
      showTime: null
    };
  }

  tick() {
    this.setState(prevState => {
      if (prevState.time == 0) {
        clearInterval(this.interval);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.start) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.state.showTime;
  }
}
