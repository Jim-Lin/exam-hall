import React from 'react';

export default class ExamHallSearch extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { userInput: "" };
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Search:</label>{' '}
        <input list="options" name="search"
          onChange={e => this.props.onChange(e.target.value)}
          // value={this.state.userInput}
        />{' '}
        <datalist id="options">
          {this.props.examHalls.map(examHall =>
            <option
              value={examHall.name}
              key={examHall.id} />
          )}
        </datalist>
      </form>
    );
  }
}
