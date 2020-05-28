import api from '../api';

export const paymentInfo = (data) => (
  api.orders.postOrders(data)
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson }))
    .catch((error) => ({ error }))
);

export default paymentInfo;