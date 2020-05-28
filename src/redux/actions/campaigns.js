export const types = {
  PIZZAS_ENTERED: 'PIZZAS_ENTERED',
};

export const pizzasEntered = (payload) => ({
  type: types.PIZZAS_ENTERED,
  payload,
});

export default pizzasEntered;
