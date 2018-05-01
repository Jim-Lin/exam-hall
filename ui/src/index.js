console.log('tag-0.1.2');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ExamHallList from './ExamHallList';
import Exam from './Exam';

const store = createStore(rootReducer)

const render = () => {
  const state = store.getState();
  console.log(state.answer);
};

store.subscribe(render);

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={ExamHallList} />
        <Route path="/examHalls/:id" component={Exam} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))
