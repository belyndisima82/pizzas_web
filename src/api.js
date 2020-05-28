const host = 'http://localhost:3002';

const getHeader = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const postHeader = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

module.exports = {
  pizzas: {
    getAllPizzas() {
      const url = `${host}/pizzas`;
      console.log(getHeader)
      return fetch(url, getHeader);
    }
  }, 
  orders: {
    getAllOrders() {
      const url = `${host}/orders`;
      return fetch(url, getHeader);
    },
    postOrders(data) {
      console.log(data)
      const url = `${host}/orders`;
      postHeader.body = JSON.stringify(data);
      return fetch(url, postHeader);
    }
  },
};
