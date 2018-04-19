import React from 'react';
import QuestionList from './QuestionList';
import CountDownTimer from './CountDownTimer';

export default class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examHall: this.props.location.state,
      start: false
    };

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.setState({ start: true });
  }

  render() {
    const { examHall, start } = this.state;

    return (
      <div className="container">
        <form>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">{examHall.name}</th>
                  <th scope="col">題數: {examHall.number}</th>
                  <th scope="col">時間: <CountDownTimer time={examHall.time} start={start} /></th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <tbody>
                <QuestionList value={examHall} onStart={this.handleStart} start={start} />
              </tbody>
            </table>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
