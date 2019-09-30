import {ISizes, SET_APP_SIZES } from "./types";

export function setAppSizes(sizes: ISizes) {
  return {
    type: SET_APP_SIZES,
    payload: {
      sizes
    }
  };
}