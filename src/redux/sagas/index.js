import { fork, all } from 'redux-saga/effects';
import session from './session';
import payment from './payment';

function * startAppSagas() {
  yield all([
    ...session,
    ...payment,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}
