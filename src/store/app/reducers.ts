import { UPDATE_SESSION, AppState, AppActionTypes } from "./types";

const initialState: AppState = {
  loggedIn: false,
  session: "",
  userName: ""
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
