export const types = {
  SETUP_HOME_VIEW: 'SETUP_HOME_VIEW',
  SET_ORDER_LIST: 'SET_ORDER_LIST',
  SETUP_PIZZAS_VIEW: 'SETUP_PIZZAS_VIEW',
};

export const setupHomeView = () => ({
  type: types.SETUP_HOME_VIEW,
});

export const setOrderList = (payload) => ({
  type: types.SET_ORDER_LIST,
  payload,
});

export const setupPizzasView = (payload) => ({
  type: types.SETUP_PIZZAS_VIEW,
  payload,
});

export default setupHomeView;
