import api from '../api';

export const getAllPizzas = () => (
  api.pizzas.getAllPizzas()
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson }))
    .catch((error) => ({ error }))
);

export default getAllPizzas;
