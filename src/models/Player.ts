import { Counter } from "./Counter";
import { ICounterDictionary } from "../store/game/types";

export type PlayerId = '1' | '2';

export interface IPlayer {
    id: PlayerId;
    isFirst: boolean;
    name: string;
    colour: string;
}
export class Player implements IPlayer {
    constructor(id: PlayerId, isFirst = false, colour: string, name?: string ){
        this.id = id;
        this.isFirst = isFirst;
        this.colour = colour;
        this.name = name ? name : `Player ${id}`
    }
    public readonly id: PlayerId;
    public readonly isFirst: boolean;
    public readonly name: string;
    public readonly colour: string;
    public static getCounters(player: IPlayer): ICounterDictionary{
        const counterDictionary: ICounterDictionary = {};
        for(let i=1; i< 10; i++){
            const counter = new Counter(i, player);
            counterDictionary[counter.key] = counter
        }
        return counterDictionary;
    }
    public get poco(): IPlayer{
        return {
            id: this.id,
            isFirst: this.isFirst,
            colour: this.colour,
            name: this.name,
        }
    }
}