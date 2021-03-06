import {
  Map as ImmutableMap,
  fromJS,
} from 'immutable';

import { types } from '../actions/pizzas';

export default (state = ImmutableMap(), action) => {
  switch (action.type) {
    case types.PIZZAS_ENTERED:
    return state.set('flavors', ImmutableMap().withMutations((innerMap) => {
      Object.keys(action.payload).forEach((key) => {
        const value = action.payload[key];
        innerMap.set(action.payload[key].name, fromJS(value));
      });
    }));
    
    default:
      return state;
  }
};
