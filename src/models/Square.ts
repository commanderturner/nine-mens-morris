import { BoardNode, IBoardNode, BoardNodePosition } from "./BoardNode";
export interface ISquare {
    id: SquareId;
    baseUnitDetails: BaseUnitDetails;
}
 //4: container base length = 8(squareid * 2) units left = 0, middle = left(0) + (length/2)(8/2) = 4, right = left(0) + length = 8
        //3: outer base length = 6(squareid * 2) units left = 1, middle = left(1) + (length/2)(6/2) = 4, right = left(1) + length = 7
        //2: middle base length = 4(squareid *2) units left = 1 + 1 = 2, middle = left(2) + (length/2)(4/2) =  4, right = left(2) + length(4) = 6
        //1: inner base length = 2(squareid *2) units left = 1 + 1 + 1, middle = left(3) + (length/2)(2/2) =  4, right = left(3) + length(2) = 5
/**
 * A square is used to generate nodes that are easily describable
 * eg. 3 squares (1, 2, 3) each with 8 nodes could then have node 1-5
 * so for descriptive purposes for nodes rather than for any game logic
 * or drawing
 *
 * @export
 * @class Square
 */
export class Square {
    public static boardNodePositions: BoardNodePosition[] = [1, 2, 3, 4, 5, 6, 7, 8];
    constructor(id: SquareId){
        this.id = id;
        const length = id*2;
        const left = 4 - id;
        const middle = left + (id);
        const right = left + length;
        this.baseUnitDetails = {
            length,
            left,
            middle,
            right, 
        }
    }
    public readonly id: SquareId;
    public baseUnitDetails: BaseUnitDetails;
    public get poco() : ISquare{
        return {
            id: this.id,
            baseUnitDetails: this.baseUnitDetails,
        }
    }
    public getNodes(): IBoardNode[]{
        const nodes : IBoardNode[] = [];
        Square.boardNodePositions.forEach(position => {
            nodes.push(new BoardNode(this.id, position).poco);
        });
        return nodes;
    }
}

export type SquareId = 1 | 2 | 3;
export type BaseUnitDetails = {
    length: number;
    left: number;
    middle: number;
    right: number;
}