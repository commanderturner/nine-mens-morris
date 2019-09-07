import { SquareNodePosition } from "./Square";
import { PlayerId } from "./Game";

export type NodeOccupationStatus = PlayerId | null;

// described by square(0-2), and square node position (0-7)
export class SquareNode {
    constructor(squareId: number, position: SquareNodePosition){
        this.squareId = squareId;
        this.position = position;
        this.occupationStatus = null;
    }

    public squareId: number;
    public position: SquareNodePosition;
    public get id(): string{
        return `${this.squareId}-${this.position}`;
    }
    public occupationStatus: NodeOccupationStatus;
}
