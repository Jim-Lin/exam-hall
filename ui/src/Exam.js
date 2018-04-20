import React from 'react';
import QuestionList from './QuestionList';
import CountDownTimer from './CountDownTimer';

export default class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examHall: this.props.location.state,
      start: false,
      data: new Object()
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleStart() {
    this.setState({ start: true });
  }

  handleChange(event) {
    const target = event.target;
    const data = this.state.data;

    data[target.name] = target.value;
    this.setState({ data: data });
    console.log(this.state.data);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { examHall, start } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="table-responsive">
            <table className="table table-striped table-hover table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">{examHall.name}</th>
                  <th scope="col" style={{ width: '25%' }}>題數:{' '}{examHall.number}</th>
                  <th scope="col" style={{ width: '25%' }}>時間:{' '}
                    <CountDownTimer
                      time={examHall.time}
                      start={start}
                      onSubmit={this.handleSubmit}
                    />
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <tbody>
                <QuestionList
                  value={examHall}
                  onStart={this.handleStart}
                  start={start}
                  onChange={this.handleChange}
                />
              </tbody>
            </table>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
