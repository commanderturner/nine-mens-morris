import { AppState, UPDATE_SESSION } from "./types";

export function updateSession(newSession: AppState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}
