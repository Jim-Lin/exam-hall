import React from 'react';
import Single from '../containers/Single';

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

    const getQuestion = question => {
      switch (question.type) {
        case 0:
          return <Single question={question} />
        default:
          throw new Error('Unknown question type: ' + type)
      }
    }

    return (
      questions.map(question =>
        <tr key={question.id}>
          <td>
            {question.id + 1}.<br />{question.name}<br /><br />
            {getQuestion(question)}
          </td>
        </tr>
      )
    );
  }
}
