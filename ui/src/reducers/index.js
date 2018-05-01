import { combineReducers } from 'redux'
import countDown from './CountDown'
import answer from './Answer'

export default combineReducers({
  countDown,
  answer
})
