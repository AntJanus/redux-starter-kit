import { TEST } from '../actions/actions';

export default rootReducer;

export const initialState = {
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case TEST:
      return Object.assign({}, { running: action.payload.running });
    default:
      return state;
  }

  return state;
}
