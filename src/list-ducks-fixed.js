/* eslint no-console: "off" */
import { createStore } from 'redux';
import list, { add, fetch, getItems, remove, update } from './ducks/list-fixed';

const store = createStore(list);
let lastItems = getItems(store.getState());
store.subscribe(() => {
  const newItems = getItems(store.getState());
  console.log(newItems);
  console.log(newItems === lastItems);
  lastItems = newItems;
});
// FETCH
store.dispatch(fetch([{
  id: 'm',
  name: 'mango',
  description: 'Sweet and sticky',
}, {
  id: 'n',
  name: 'nectarine',
  description: 'Crunchy goodness',
}]));
// ADD
store.dispatch(add({
  id: 'o',
  name: 'orange',
  description: 'Zesty',
}));
// REMOVE
store.dispatch(remove('o'));
// UPDATE
store.dispatch(update({
  id: 'm',
  name: 'mango',
  description: 'Sweet and super sticky',
}));
// BOGUS
store.dispatch({
  type: 'BOGUS',
});
