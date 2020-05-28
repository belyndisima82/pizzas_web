import {
    Map as ImmutableMap,
    fromJS,
  } from 'immutable';
  
  import { types } from '../actions/payment';
  
  export default (state = ImmutableMap(), action) => {
    switch (action.type) {
      case types.PIZZAS_ORDERED:
      return state.set('order', ImmutableMap().withMutations((innerMap) => {
        Object.keys(action.payload).forEach((key) => {
          const value = action.payload[key];
          innerMap.set(action.payload[key].name, fromJS(value));
        });
      }));

      case types.CHECKOUT_STATUS:
      return state.set = ImmutableMap();

      default:
        return state;
    }
  };
  