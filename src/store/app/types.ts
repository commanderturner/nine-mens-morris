// Describing the shape of the system's slice of state
export interface AppState {
    loggedIn: boolean;
    session: string;
    userName: string;
  }
  
  // Describing the different ACTION NAMES available
  export const UPDATE_SESSION = "UPDATE_SESSION";
  
  export interface UpdateSessionAction {
    type: typeof UPDATE_SESSION;
    payload: AppState;
  }
  
  export type AppActionTypes = UpdateSessionAction;
  