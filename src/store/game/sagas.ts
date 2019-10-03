import { select, put, takeEvery } from 'redux-saga/effects';

import { DeployCounterAction, DEPLOY_COUNTER } from './types';
import { AppState } from '..';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* deployCounterSaga(action: DeployCounterAction) {
  const state: AppState = yield select();
  const {counters, turns, currentTurnId, nodes } = state.game;
  const currentTurn = currentTurnId ? turns[currentTurnId] : null;
  if(currentTurn){
    const {playerId} = currentTurn;
    const playerUndeployedCounterKeys = Object.keys(counters).filter(counterKey => counters[counterKey].playerId === playerId && counters[counterKey].status === 'not-deployed');
    if(playerUndeployedCounterKeys && playerUndeployedCounterKeys.length){
      const counterToDeploy = counters[playerUndeployedCounterKeys[0]];
      const counterNode = nodes[action.payload.nodeId];
      // yield put()
    }
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export const gameSagas = [
  takeEvery(DEPLOY_COUNTER, deployCounterSaga),
];
