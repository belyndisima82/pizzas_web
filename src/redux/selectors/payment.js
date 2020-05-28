import { Map as ImmutableMap } from 'immutable';

export const order = (state) => state.payment ? state.payment.get('order', ImmutableMap()) : null;

export default order;
