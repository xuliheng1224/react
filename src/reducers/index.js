import { combineReducers } from 'redux';
import test from './test';
import todo from './todo';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
  test,
  todo,
  visibilityFilter
})

export default reducer