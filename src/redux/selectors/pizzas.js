import { Map as ImmutableMap } from 'immutable';

export const selectAllPizzas = (state) => state.pizzas.get('flavors', ImmutableMap());

export default selectAllPizzas;
