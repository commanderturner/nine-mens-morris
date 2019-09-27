import {
    GameActionTypes,
    IGameState,
    SET_GAME_PIECES,
    SetGameSizesAction,
    SetGamePiecesAction,
    SET_GAME_SIZES
  } from "./types";
  
  const initialState: IGameState = {
    players: {},
    nodes: {},
    squares: {},
    lines: {},
    counters: {},
    sizes: {
      baseUnits: {
        boardAreaLength: 8,
        baseMultiplier: 100,
        squareSize: 10,
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
      case SET_GAME_PIECES:{
        const newState = {...state};
        const {payload} = action as SetGamePiecesAction
        newState.players = payload.players;
        newState.nodes = payload.nodes;
        newState.squares = payload.squares;
        newState.lines = payload.lines;
        newState.counters = payload.counters;
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
  