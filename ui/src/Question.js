import React from 'react';

function Single(props) {
  const question = props.question;
  return (
    question.items.map((item, index) =>
      <div key={index}>
        <label>
          <input type='radio' name={`radio${question.id}`} value={index} />
          {'  '}{item.name}
        </label>
      </div>
    )
  );
}

export default class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const question = this.props.value;
    let questionType;
    if (question.type == 0) {
      questionType = ( <Single question={question} /> );
    }

    return (
      <tr>
        <td>
          {question.id + 1}.<br />{question.name}<br /><br />
          {questionType}
        </td>
      </tr>
    );
  }
}
