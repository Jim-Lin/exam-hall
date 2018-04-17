import React from 'react';
import Question from './Question';

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    const examHall = this.props.value;
    const sourceUrl = `http://${location.hostname}${SERVICE_PORT}/api/examHalls/${examHall.id}/questionStream/${examHall.number}`;

    this.source = new EventSource(sourceUrl);
    this.source.addEventListener("message", function(event) {
      let question = JSON.parse(event.data);
      this.setState({ questions: this.state.questions.concat(question) });
    }.bind(this));

    this.source.onerror = function() {
      this.close();
    };
  }

  // componentDidUmnount() {
  //   this.source.removeAllListeners();
  // }

  render() {
    const questions = this.state.questions;

    return (
      questions.map(question =>
        <Question key={question.id} value={question} />
      )
    );
  }
}
