import { combineReducers } from 'redux';
import { createSelector } from 'reselect'; // FIXED
import { combineActions, createAction, handleActions } from 'redux-actions';

// ACTION CREATORS
/*
export const fetch = value => ({
  type: 'FETCH',
  value,
});
export const add = value => ({
  type: 'ADD',
  value,
});
export const remove = id => ({
  type: 'REMOVE',
  value: id,
});
export const update = value => ({
  type: 'UPDATE',
  value,
});
*/
export const fetch = createAction('FETCH');
export const add = createAction('ADD');
export const remove = createAction('REMOVE');
export const update = createAction('UPDATE');
// REDUCERS
/*
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH': {
      const entry = {};
      for (let i = 0; i < action.value.length; i += 1) {
        const item = action.value[i];
        entry[item.id] = item;
      }
      return entry;
    }
    case 'ADD':
    case 'UPDATE': {
      const entry = {};
      entry[action.value.id] = action.value;
      return {
        ...state,
        ...entry,
      };
    }
    case 'REMOVE': {
      const newState = { ...state };
      delete newState[action.value];
      return newState;
    }
    default:
      return state;
  }
};
*/
const byId = handleActions({
  [fetch](state, action) {
    const entry = {};
    for (let i = 0; i < action.payload.length; i += 1) {
      const item = action.payload[i];
      entry[item.id] = item;
    }
    return entry;
  },
  [combineActions(
    update,
    add,
  )](state, action) {
    const entry = {};
    entry[action.payload.id] = action.payload;
    return {
      ...state,
      ...entry,
    };
  },
  [remove](state, action) {
    const newState = { ...state };
    delete newState[action.payload];
    return newState;
  },
}, {});
/*
const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.value.map(o => o.id);
    case 'ADD':
      return [...state, action.value.id];
    case 'REMOVE': {
      const newState = [...state];
      newState.splice(state.indexOf(action.value), 1);
      return newState;
    }
    default:
      return state;
  }
};
*/
const ids = handleActions({
  [fetch](state, action) {
    return action.payload.map(o => o.id);
  },
  [add](state, action) {
    return [...state, action.payload.id];
  },
  [remove](state, action) {
    const newState = [...state];
    newState.splice(state.indexOf(action.payload), 1);
    return newState;
  },
}, []);
export default combineReducers({
  byId,
  ids,
});
// SELECTORS
export const getItem = (state, id) => state.byId[id];
const getItemsIds = state => state.ids;
const getItemsById = state => state.byId;
export const getItems = createSelector(
  [getItemsIds, getItemsById],
  (itemsIds, itemsById) => itemsIds.map(id => itemsById[id]),
);
