import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import randomApi from '../api/randomApi';

const fetchRequest = createAction('FETCH_REQUEST');
const fetchSuccess = createAction('FETCH_SUCESS');
export const fetch = () => (dispatch) => {
  dispatch(fetchRequest());
  randomApi().then(number => dispatch(fetchSuccess(number)));
};
// REDUCERS
const number = handleActions({
  [fetchSuccess](state, action) {
    return action.payload;
  },
}, null);
const fetching = handleActions({
  [fetchRequest]() {
    return true;
  },
  [fetchSuccess]() {
    return false;
  },
}, false);
export default combineReducers({
  number,
  fetching,
});
// SELECTORS
export const getNumber = state => state.number;
export const getFetching = state => state.fetching;
