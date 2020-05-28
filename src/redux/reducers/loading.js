import { types } from '../actions/loading';

export default (state = false, action) => {
  switch (action.type) {
    case types.IS_FETCHING:
      return true;
    case types.IS_DONE:
      return false;
    default:
      return state;
  }
};
