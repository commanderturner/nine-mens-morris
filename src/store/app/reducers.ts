import { AppState, AppActionTypes, SET_APP_SIZES, SetAppSizesAction } from "./types";

const initialState: AppState = {
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

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case SET_APP_SIZES:{
      const newState = {...state};
      const {payload} = action as SetAppSizesAction
      newState.sizes = payload.sizes;
      return newState
    };
    default:
      return state;
  }
}
