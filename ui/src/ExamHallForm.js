import React from 'react';

export default class ExamHallForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.value;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { id, name, number, time } = this.state;
    return (
      <tr>
        <th scope="row">{name}</th>
        <td>
          <input type="range" min="1" max="100" step="1" name="number"
            style={{ width: '80px' }}
            value={number}
            id={`faderNumber${id}`}
            onChange={(e) => this.handleChange(e)} />
          {' '}
          <output htmlFor={`faderNumber${id}`}>{number}</output>
        </td>
        <td>
          <input type="range" min="1" max="120" step="1" name="time"
            style={{ width: '80px' }}
            value={time}
            id={`faderTime${id}`}
            onChange={(e) => this.handleChange(e)} />
          {' '}
          <output htmlFor={`faderTime${id}`}>{time}</output>
        </td>
        <td>
          <form onSubmit={(e) => this.props.onSubmit(this.state, e)}>
            <button type="submit" className="btn btn-outline-primary">Start Test</button>
          </form>
        </td>
      </tr>
    );
  }
}
