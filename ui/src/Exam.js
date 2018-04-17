import React from 'react';
import QuestionList from './QuestionList';

export default class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examHall: this.props.location.state
    };
  }

  render() {
    const examHall = this.state.examHall;

    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">{examHall.name}</th>
                <th scope="col">題數: {examHall.number}</th>
                <th scope="col">時間: {examHall.time}</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <tbody>
              <QuestionList value={examHall}  />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
