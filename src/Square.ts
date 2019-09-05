import { SquareNode } from "./SquareNode";

export class Square {
    constructor(id: number){
        this.id = id;
        for(let i = 0; i++; i < 8){
            this.nodes.push(new SquareNode(id, <SquareNodePosition>i));
        }
    }
    public readonly id: number;
    public nodes : Array<SquareNode> = [];
}

// starting 0 top left, 1, top middle... clockwise around
export type SquareNodePosition = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;