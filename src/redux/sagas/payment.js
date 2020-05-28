import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { types, order, checkout } from '../actions/payment';
import { paymentInfo } from '../../data/payment';
import { doneFetching, fetching } from '../actions/loading';
import { push } from '../actions/router';



function* handlePaymentInfo(action) {
  yield put(fetching());
  var data = {};
  data.address = action.payload;
  var order = JSON.parse(localStorage.getItem("order") || "[]");
  var order_items = [];
  for (var i = 0; i < order.length; i ++) {
      var items = {};
      items.pizza_id = order[i].id;
      items.quantity = order[i].quantity;
      order_items.push(items);
  }
  data.items = order_items;
    const { response, error } = yield call(paymentInfo, data);
    if (!error) {
      yield put(doneFetching());
      yield put(push('/'));
      localStorage.clear();
      return yield put(checkout());
    } else {
      yield put(doneFetching());
    }
}

function* getOrder() {
    var orderArr = JSON.parse(localStorage.getItem("order") || "[]");
    if (orderArr.length > 0) {
      return yield put(order(orderArr));
    }
  }

function* deleteItem(action) {
  var orderArr = JSON.parse(localStorage.getItem("order") || "[]");
  for (var i = 0; i < orderArr.length; i += 1) {
    if (orderArr[i].id == action.payload) {
      if (orderArr[i].quantity > 1) {
        orderArr[i].quantity = orderArr[i].quantity - 1;
      } else {
        orderArr.splice(i, 1)
      }  
    }
  }
  localStorage.setItem('order', JSON.stringify(orderArr));
  return yield put(order(orderArr));
}

function* watchPaymentActions() {
    yield takeEvery(
      types.SEND_PAYMENT_INFO,
      handlePaymentInfo,
    );
    yield takeEvery(
      types.GET_ORDER,
      getOrder,
    );
    yield takeEvery(
        types.DELETE_ITEM,
        deleteItem,
      );
  }


export default [
  fork(watchPaymentActions),
];
