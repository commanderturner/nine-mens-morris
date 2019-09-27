import { Coordinate } from "./BoardNode";
import { IPlayer } from "./Player";

export type CounterStatus = 'in-play' | 'not-deployed' | 'taken';
export interface ICounter{
    counterId: number;
    playerId: number;
    colour: string;
    baseCoords: Coordinate | null;
    status: CounterStatus;
}
export class Counter implements ICounter {
    constructor(counterId: number, player: IPlayer){
        this.counterId = counterId;
        this.playerId = player.id;
        this.colour = player.colour;
    }
    counterId: number;
    playerId: number;
    colour: string;
    baseCoords: Coordinate | null = null;
    status: CounterStatus = 'not-deployed'

    get poco(){
        return {
            counterId: this.counterId,
            playerId: this.playerId,
            colour: this.colour,
            baseCoords: this.baseCoords,
            status: this.status,
        }
    }
}