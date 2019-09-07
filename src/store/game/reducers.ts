import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    GameActionTypes,
    GameState
  } from "./types";
  
  const initialState: GameState = {
    messages: []
  };
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): GameState {
    switch (action.type) {
      case SEND_MESSAGE:
        return {
          messages: [...state.messages, action.payload]
        };
      case DELETE_MESSAGE:
        return {
          messages: state.messages.filter(
            message => message.timestamp !== action.meta.timestamp
          )
        };
      default:
        return state;
    }
  }
  