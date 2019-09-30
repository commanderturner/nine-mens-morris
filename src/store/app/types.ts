// Describing the shape of the system's slice of state
export interface AppState {
    sizes: ISizes;
  }
  export interface ISizes {
    baseUnits: {
      boardAreaLength: number;
      baseMultiplier: number;
      squareSize: number;
    }
    window: {
      width: number;
      height: number;
    }
  }
  // Describing the different ACTION NAMES available
  export const SET_APP_SIZES = 'SET_APP_SIZES';
  export interface SetAppSizesAction {
    type: typeof SET_APP_SIZES;
    payload: {
      sizes: ISizes;
    };
  }
  export type AppActionTypes =  SetAppSizesAction;
  