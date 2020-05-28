import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { types, order } from '../actions/payment';
import { paymentInfo } from '../../data/payment';
import { doneFetching, fetching } from '../actions/loading';


function* handlePaymentInfo(action) {
  yield put(fetching());
  var data = action.payload;
  data.items = localStorage.order;
    const { response, error } = yield call(paymentInfo, data);
    if (!error) {
      yield put(doneFetching());
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
      if (orderArr[i].quantity > 0) {
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
