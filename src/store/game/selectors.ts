import { AppState } from "..";
import { ITurn } from "../../models/Turn";

export const getCurrentTurnId = (state: AppState) => state.game.currentTurnId;
export const getTurns = (state: AppState) => state.game.turns;

export const getCurrentTurn = (state:AppState): ITurn | null => {
    const turns = getTurns(state);
    const currentTurnId = getCurrentTurnId(state);
    if(currentTurnId && Object.keys(turns)){
        return turns[currentTurnId];
    }
    return null;
}