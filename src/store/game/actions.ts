import { Message, SEND_MESSAGE, DELETE_MESSAGE, SET_GAME_STATE } from "./types";
import { Player } from "../../models/Game";
import { SquareNode } from "../../models/SquareNode";

export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  };
}

export function setGameState(players: Player[], nodes: SquareNode[]) {
  return {
    type: SET_GAME_STATE,
    payload: {
      players,
      nodes,
    }
  };
}