/* eslint no-console: "off" */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import random, { fetch, getFetching, getNumber } from './ducks/random';

const store = createStore(random, applyMiddleware(thunk));
store.subscribe(() => {
  const state = store.getState();
  const fetching = getFetching(state);
  const number = getNumber(state);
  console.log(fetching);
  console.log(number);
});
store.dispatch(fetch());
