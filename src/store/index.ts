import { createStore, combineReducers , applyMiddleware} from "redux";
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { appReducer } from "./app/reducers";
import { gameReducer } from "./game/reducers";
import { appSagas } from "./app/sagas";

const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer
});

function* rootSaga() {
  const subSagas = [
    ...appSagas
  ];
  yield all([...subSagas]);
}
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }
