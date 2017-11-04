// ACTION CREATORS
export const add = value => ({
  type: 'ADD',
  value,
});
export const remove = value => ({
  type: 'REMOVE',
  value,
});
// REDUCERS
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    case 'REMOVE': {
      const newState = [...state];
      newState.splice(state.indexOf(action.value), 1);
      return newState;
    }
    default:
      return state;
  }
};
// SELECTORS
export const get = state => state;
