console.log('tag-0.1.2');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamHallList from './ExamHallList';
import Exam from './Exam';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={ExamHallList} />
      <Route path="/examHalls/:id" component={Exam} />
    </div>
  </Router>
), document.getElementById('root'))
