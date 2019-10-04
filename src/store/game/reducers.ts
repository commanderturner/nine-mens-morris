import {
    GameActionTypes,
    IGameState,
    SET_GAME_PIECES,
    SetGamePiecesAction,
    SET_GAME_TURN,
    SetGameTurnAction,
    UPDATE_COUNTER,
    UpdateCounterAction,
    UpdateNodeAction,
    UPDATE_NODE,
    UpdateTurnAction,
    UPDATE_TURN,
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
        newState.turns = {...newState.turns};
        newState.turns[payload.turn.id] = payload.turn;
        return newState
      };
      case UPDATE_COUNTER:{
        const {payload} = action as UpdateCounterAction
        const newState = {...state};
        newState.counters = {...newState.counters};
        newState.counters[payload.counter.key] = payload.counter;
        return newState
      }
      case UPDATE_NODE:{
        const {payload} = action as UpdateNodeAction
        const newState = {...state};
        newState.nodes = {...newState.nodes};
        newState.nodes[payload.node.key] = payload.node;
        return newState
      }
      case UPDATE_TURN:{
        const {payload} = action as UpdateTurnAction
        const newState = {...state};
        newState.turns = {...newState.turns};
        newState.turns[payload.turn.id] = payload.turn;
        return newState
      }
      default:
        return state;
    }
  }
  