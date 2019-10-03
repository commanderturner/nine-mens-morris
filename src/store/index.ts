import { createStore, combineReducers , applyMiddleware} from "redux";
// import { createStore, combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { appReducer } from "./app/reducers";
import { gameReducer } from "./game/reducers";
import { gameSagas } from "./game/sagas";

const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer
});

export function* rootSaga() {
  const subSagas = [
    ...gameSagas
  ];
  yield all([...subSagas]);
}
export type AppState = ReturnType<typeof rootReducer>;
export const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  // const middlewares = [sagaMiddleware];
  const middlewares: any[] = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
    // composeWithDevTools()
    );
    return store;
  }
