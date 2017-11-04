/* eslint no-console: "off" */
import { createStore } from 'redux';
import array, { add, get, remove } from './ducks/array';

const store = createStore(array);
let lastArray = get(store.getState());
store.subscribe(() => {
  const newArray = get(store.getState());
  console.log(newArray);
  console.log(newArray === lastArray);
  lastArray = newArray;
});
store.dispatch(add('apple'));
store.dispatch(add('banana'));
store.dispatch(add('cranberry'));
store.dispatch(remove('banana'));
