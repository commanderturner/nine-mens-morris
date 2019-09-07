import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    GameActionTypes,
    GameState,
    SET_GAME_STATE
  } from "./types";
  
  const initialState: GameState = {
    messages: [],
    players: [],
    nodes: []
  };
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): GameState {
    switch (action.type) {
      case SEND_MESSAGE:{
          const newState = {...state};
          newState.messages =  [...state.messages, action.payload]
          return newState;
      }
      case DELETE_MESSAGE: {
          const newState = {...state};
          newState.messages = state.messages.filter(
            message => message.timestamp !== action.meta.timestamp
          );
          return newState;
      }
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
  