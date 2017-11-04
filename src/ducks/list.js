/* eslint no-console: "off" */
import { combineReducers } from 'redux';

// ACTION CREATORS
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
// REDUCERS
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
export default combineReducers({
  byId,
  ids,
});
// SELECTORS
export const getItem = (state, id) => state.byId[id];
export const getItems = state => state.ids.map(id => state.byId[id]);
