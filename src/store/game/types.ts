import { Player } from "../../models/Game";
import { SquareNode } from "../../models/SquareNode";

// Describing the shape of the chat's slice of state
export interface Message {
    user: string;
    message: string;
    timestamp: number;
  }
  
  export interface GameState {
    messages: Message[];
    players: Player[];
    nodes: SquareNode[];
  }
  
  // Describing the different ACTION NAMES available
  export const SEND_MESSAGE = "SEND_MESSAGE";
  export const DELETE_MESSAGE = "DELETE_MESSAGE";
  export const SET_GAME_STATE = "SET_GAME_STATE";
  
  interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
  }
  
  interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    meta: {
      timestamp: number;
    };
  }

  interface SetGameStateAction {
    type: typeof SET_GAME_STATE;
    payload: {
      players: Player[];
      nodes: SquareNode[];
    };
  }
  
  export type GameActionTypes = SendMessageAction | DeleteMessageAction | SetGameStateAction;
  