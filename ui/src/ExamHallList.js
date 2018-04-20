import React from 'react';
// import { withRouter } from 'react-router-dom'
import ExamHallForm from './ExamHallForm';
import ExamHallSearch from './ExamHallSearch';
import Pagination from './Pagination';

export default class ExamHallList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      examHalls: [],
      examHallsCopy: [],
      pageOfItems: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  handleSearch(name) {
    const regex = new RegExp(name, 'i');
    let examHalls = this.state.examHalls.filter(examHall => examHall.name.match(regex));
    this.setState({ examHallsCopy: examHalls });
  }

  handleSubmit(examHall, event) {
    event.preventDefault();
    this.props.history.push('/examHalls/' + examHall.id, examHall);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    fetch("http://" + location.hostname + SERVICE_PORT + "/api/examHalls")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            examHalls: result,
            examHallsCopy: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, examHalls, examHallsCopy, pageOfItems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const thStyle = (value) => {
        return { width: value + '%' };
      };

      return (
        <div className="container">
          <div className="table-responsive">
            <div><ExamHallSearch examHalls={examHalls} onChange={this.handleSearch} /></div>
            <table className="table table-striped table-hover table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">考試名稱</th>
                  <th scope="col" style={thStyle(10)}>題數</th>
                  <th scope="col" style={thStyle(10)}>時間</th>
                  <th scope="col" style={thStyle(10)}></th>
                </tr>
              </thead>
              <tbody>
                {/* {examHallsCopy.map((examHall) =>
                  <ExamHallForm key={examHall.id} value={examHall} onSubmit={this.handleSubmit} />
                )} */}

                {pageOfItems.map(examHall =>
                  <ExamHallForm key={examHall.id} value={examHall} onSubmit={this.handleSubmit} />
                )}
              </tbody>
            </table>
            <Pagination items={examHallsCopy} size={1} onChangePage={this.onChangePage} />
          </div>
        </div>
      );
    }
  }
}

// ReactDOM.render(
//   <ExamHallList />,
//   document.getElementById('root')
// );

// export default withRouter(ExamHallList);
