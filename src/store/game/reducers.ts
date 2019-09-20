import {
    GameActionTypes,
    GameState,
    SET_GAME_STATE
  } from "./types";
  
  const initialState: GameState = {
    players: [],
    nodes: [],
    squares: [],
  };
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): GameState {
    switch (action.type) {
      case SET_GAME_STATE:{
        const newState = {...state};
        newState.players = action.payload.players;
        newState.nodes = action.payload.nodes;
        newState.squares = action.payload.squares;
        return newState
      };
      default:
        return state;
    }
  }
  