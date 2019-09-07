import { SquareNode } from "./SquareNode";

/**
 * A square is used to generate nodes that are easily describable
 * eg. 3 squares (0, 1, 2) each with 8 nodes could then have node 0-5
 * so for descriptive purposes for nodes rather than for any game logic
 * or drawing
 *
 * @export
 * @class Square
 */
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