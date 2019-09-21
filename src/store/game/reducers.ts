import {
    GameActionTypes,
    IGameState,
    SET_GAME_STATE,
    SetGameSizesAction,
    SetGameStateAction,
    SET_GAME_SIZES
  } from "./types";
  
  const initialState: IGameState = {
    players: {},
    nodes: {},
    squares: {},
    sizes: {
      baseUnits: {
        boardAreaLength: 8,
        baseMultiplier: 100,
      },
      window: {
        width: 800,
        height: 800,
      },
    }
  };
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): IGameState {
    switch (action.type) {
      case SET_GAME_STATE:{
        const newState = {...state};
        const {payload} = action as SetGameStateAction
        newState.players = payload.players;
        newState.nodes = payload.nodes;
        newState.squares = payload.squares;
        return newState
      };
      case SET_GAME_SIZES:{
        const newState = {...state};
        const {payload} = action as SetGameSizesAction
        newState.sizes = payload.sizes;
        return newState
      };
      default:
        return state;
    }
  }
  