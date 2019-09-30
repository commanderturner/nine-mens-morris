import {
    GameActionTypes,
    IGameState,
    SET_GAME_PIECES,
    SetGamePiecesAction,
    SET_GAME_TURN,
    SetGameTurnAction,
  } from "./types";
  
  const initialState: IGameState = {
    players: {},
    nodes: {},
    squares: {},
    lines: {},
    counters: {},
    turns: {},
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
        newState.turns[payload.turn.id] = payload.turn;
        return newState
      };
      default:
        return state;
    }
  }
  