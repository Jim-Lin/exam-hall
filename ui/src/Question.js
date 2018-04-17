import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const question = this.props.value;

    return (
      <tr>
        <td>{question.name}</td>
      </tr>
    );
  }
}
