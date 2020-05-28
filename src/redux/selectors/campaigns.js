import { Map as ImmutableMap } from 'immutable';

export const selectAllPizzas = (state) => state.campaigns.get('flavors', ImmutableMap());

export default selectAllPizzas;
