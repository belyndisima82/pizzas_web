export const types = {
    SEND_PAYMENT_INFO: 'SEND_PAYMENT_INFO',
    GET_ORDER: 'GET_ORDER',
    PIZZAS_ORDERED: 'PIZZAS_ORDERED',
    DELETE_ITEM: 'DELETE_ITEM',
    CHECKOUT_STATUS: 'CHECKOUT_STATUS',
  };
  
  export const paymentInfo = (payload) => ({
    type: types.SEND_PAYMENT_INFO,
    payload,
  });

  export const getOrder = (payload) => ({
      type: types.GET_ORDER,
      payload,
  });

  export const order = (payload) => ({
    type: types.PIZZAS_ORDERED,
    payload,
  });

  export const deleteItem = (payload) => ({
    type: types.DELETE_ITEM,
    payload,
  });

  export const checkout = (payload) => ({
    type: types.CHECKOUT_STATUS,
    payload,
  })
  
  export default paymentInfo;