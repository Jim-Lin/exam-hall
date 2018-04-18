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
      const question = JSON.parse(event.data);
      this.setState({ questions: this.state.questions.concat(question) });

      if (!this.props.start) {
        this.props.onStart();
      }
    }.bind(this)); // https://github.com/facebook/react/issues/9498#issuecomment-313816103

    this.source.onerror = function() {
      this.close();
    };
  }

  render() {
    const questions = this.state.questions;

    return (
      questions.map(question =>
        <Question key={question.id} value={question} />
      )
    );
  }
}
