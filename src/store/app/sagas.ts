import { put, takeEvery } from 'redux-saga/effects'
import { UpdateSessionAction } from './types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: UpdateSessionAction) {
   try {
        const user = {};
      yield put({type: "USER_FETCH_SUCCEEDED", user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export const appSagas = [
  takeEvery("USER_FETCH_REQUESTED", fetchUser),
];
