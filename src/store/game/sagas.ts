import { select, put, takeEvery } from 'redux-saga/effects';

import { DeployCounterAction, DEPLOY_COUNTER, UPDATE_COUNTER, UpdateCounterAction, UpdateTurnAction, UPDATE_TURN, UpdateNodeAction, UPDATE_NODE } from './types';
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
      const updatedCounterToDeploy = {...counters[playerUndeployedCounterKeys[0]]};
      const updatedNode = {...nodes[action.payload.nodeId]};
      const updatedCurrentTurn = {...currentTurn};
      const newCounterCoords = {...updatedNode.baseCoordinate};
      updatedNode.occupationStatus = updatedCurrentTurn.playerId;
      updatedCounterToDeploy.baseCoordinate = newCounterCoords;
      updatedCounterToDeploy.status = 'in-play';
      updatedCurrentTurn.actionTaken = { counterKey : updatedCounterToDeploy.key, coord: newCounterCoords };
        yield put<UpdateCounterAction>({type: UPDATE_COUNTER, payload:{counter: updatedCounterToDeploy}});
        yield put<UpdateTurnAction>({type: UPDATE_TURN, payload:{turn: updatedCurrentTurn}});
        yield put<UpdateNodeAction>({type: UPDATE_NODE, payload: {node: updatedNode}});
    }
  }
}

/*
  Starts after a counter is placed update properties on counter, node and turn.
*/
export const gameSagas = [
  takeEvery(DEPLOY_COUNTER, deployCounterSaga),
];
