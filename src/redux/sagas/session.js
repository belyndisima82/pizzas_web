import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { pizzasEntered } from '../actions/campaigns';
import { types } from '../actions/session'
import { getAllPizzas } from '../../data/campaigns';
import { doneFetching, fetching } from '../actions/loading';

function* handleSetUpHomeView() {
  yield put(doneFetching());
}

function* handleSetUpPizzasView(action) {
  yield put(fetching());
    const { response, error } = yield call(getAllPizzas, action.payload);
    if (!error) {
      yield put(doneFetching());
      yield put(pizzasEntered(response));
    } else {
      yield put(doneFetching());
    }
}

function* handleOrder(action) {
  var newOrder = action.payload;
  var orderArr = localStorage.order ? JSON.parse(localStorage.order) : [];
  if (orderArr.length > 0) {
    var found = false;
    for (var i = 0; i < orderArr.length; i++) {
      if (newOrder.id == orderArr[i].id) {
        orderArr[i].quantity += 1;
        found = true;
      }
    }
    if(!found) {
      newOrder.quantity = 1;
      orderArr.push(newOrder);
    }
  } else {
    newOrder.quantity = 1;
    orderArr.push(newOrder);
  }
  localStorage.setItem('order', JSON.stringify(orderArr));
}

function* watchSessionActions() {
  yield takeEvery(
    types.SETUP_HOME_VIEW,
    handleSetUpHomeView,
  );
  yield takeEvery(
    types.SETUP_PIZZAS_VIEW,
    handleSetUpPizzasView,
  );
  yield takeEvery(
    types.SET_ORDER_LIST,
    handleOrder,
  )
}

export default [
  fork(watchSessionActions),
];
