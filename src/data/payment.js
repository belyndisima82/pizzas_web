import api from '../api';

export const paymentInfo = () => (
  api.orders.paymentInfo()
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson }))
    .catch((error) => ({ error }))
);

export default paymentInfo;