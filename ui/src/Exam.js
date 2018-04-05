import React from 'react';

export default class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      examHall: this.props.location.state,
      questions: []
    };
  }

  render() {
    return (
      <h1>{this.state.examHall.number}/{this.state.examHall.time}</h1>
    );
  }
}
