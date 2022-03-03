import { all, fork, call, put, delay, takeLatest } from 'redux-saga/effects';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

// call 동기  :  결과값 받을때 까지 기다렷다가 실행된다  - await 이랑 비슷
// fork 비동기  :  결과값 받을때 까지 기다리지 않고 다음 코드가 실행된다.  - await없는 거랑 비슷

function* logIn(action) {
  try {
    // call(함수, 매개변수)
    // const result = yield call(logInAPI, action.data);
    yield delay(1000); // 서버가 없을 때, 임시로 비동기적인 효과주기
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      err: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      err: err.response.data,
    });
  }
}

// eventListener 같은 역할
// takeEvery - while(true) 와 같은 역할
// takeLatest - 동시에 로딩중인 것 들 중에 마지막 액션실행 - 실수로 두번 클릭되는거 방지 - 단, 백엔드 요청을 취소할 수는 없음...
// 응답을 취소하는 형태.. 주의 ..
// 서버쪽에서 중복요청 검사하는편이 좋다.
// 디도스 공격처럼 될거 같으면 throttle 쓰자.
// throttle(... , 1000); 몇초후에 실행.

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
