import { Coordinate } from "./BoardNode";
import { IPlayer, PlayerId } from "./Player";

export type CounterStatus = 'in-play' | 'not-deployed' | 'taken';
export interface ICounter{
    counterId: number;
    playerId: PlayerId;
    colour: string;
    baseCoords: Coordinate | null;
    status: CounterStatus;
    key: string;
}
export class Counter implements ICounter {
    constructor(counterId: number, player: IPlayer){
        this.counterId = counterId;
        this.playerId = player.id;
        this.colour = player.colour;
        this.key = `${this.playerId}-${this.counterId}`
    }
    counterId: number;
    playerId: PlayerId;
    colour: string;
    baseCoords: Coordinate | null = null;
    status: CounterStatus = 'not-deployed'
    key: string;

    get poco(){
        return {
            counterId: this.counterId,
            playerId: this.playerId,
            colour: this.colour,
            baseCoords: this.baseCoords,
            status: this.status,
            key: this.key,
        }
    }
}