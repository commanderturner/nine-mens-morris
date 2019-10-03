import {
    GameActionTypes,
    IGameState,
    SET_GAME_PIECES,
    SetGamePiecesAction,
    SET_GAME_TURN,
    SetGameTurnAction,
    // DEPLOY_COUNTER,
    // DeployCounterAction,
  } from "./types";
  
  const initialState: IGameState = {
    players: {},
    nodes: {},
    squares: {},
    lines: {},
    counters: {},
    turns: {},
    currentTurnId: null,
  };
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): IGameState {
    switch (action.type) {
      case SET_GAME_PIECES:{
        const newState = {...state};
        const {payload} = action as SetGamePiecesAction
        newState.players = payload.players;
        newState.nodes = payload.nodes;
        newState.squares = payload.squares;
        newState.lines = payload.lines;
        newState.counters = payload.counters;
        return newState
      }
      case SET_GAME_TURN:{
        const newState = {...state};
        const {payload} = action as SetGameTurnAction
        newState.currentTurnId = payload.turn.id;
        newState.turns[payload.turn.id] = payload.turn;
        return newState
      };
      // case DEPLOY_COUNTER:{
      //   const newState = {...state};
      //   const {payload} = action as DeployCounterAction
      //   newState.currentTurnId = payload.turn.id;
      //   newState.turns[payload.turn.id] = payload.turn;
      //   const nodeId = action.payload.nodeId;
      //   const node = newState.nodes[nodeId];
      //   const baseCoordinate = {...node.baseCoordinate}
      //   newState.counters[payload.counterId].baseCoordinate = baseCoordinate;
      //   newState.counters[payload.counterId].status = 'in-play';
      //   return newState
      // }
      default:
        return state;
    }
  }
  