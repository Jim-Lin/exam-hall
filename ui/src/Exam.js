import React from 'react';
import { connect } from 'react-redux'
import QuestionList from './containers/QuestionList';
import CountDownTimer from './containers/CountDownTimer';

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examHall: this.props.location.state,
      data: new Object()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const data = this.state.data;
  //
  //   data[target.name] = target.value;
  //   this.setState({ data: data });
  //   console.log(this.state.data);
  // }

  handleSubmit() {
    console.log(this.props.answer);
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
                <QuestionList value={examHall} />
              </tbody>
            </table>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answer: state.answer
})

export default connect(mapStateToProps)(Exam)
