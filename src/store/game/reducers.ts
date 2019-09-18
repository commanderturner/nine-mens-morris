import {
    GameActionTypes,
    GameState,
    SET_GAME_STATE
  } from "./types";
  
  const initialState: GameState = {
    players: [],
    nodes: []
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
        return newState
      };
      default:
        return state;
    }
  }
  