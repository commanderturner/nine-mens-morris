import { BoardNodePosition } from "./Square";
import { PlayerId } from "./Player";

export type NodeOccupationStatus = PlayerId | null;

export interface IBoardNode {
    squareId: number;
    position: BoardNodePosition;
    id: string;
    occupationStatus: NodeOccupationStatus;
}
// described by square(0-2), and square node position (0-7)
export class BoardNode implements IBoardNode {
    constructor(squareId: number, position: BoardNodePosition){
        this.squareId = squareId;
        this.position = position;
        this.occupationStatus = null;
        this.id = `${squareId}-${position}`;
    }

    public squareId: number;
    public position: BoardNodePosition;
    public id: string;
    public occupationStatus: NodeOccupationStatus;
    public get poco() : IBoardNode{
        return {
            squareId: this.squareId,
            position: this.position,
            id: this.id,
            occupationStatus: this.occupationStatus,
        }
    }
}
