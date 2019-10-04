import { PlayerId } from "./Player";
import { SquareId } from "./Square";

export type NodeOccupationStatus = PlayerId | null;
// starting 1 top left, 2, top middle... clockwise around
export type BoardNodePosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Coordinate= {x: number, y: number};
export interface IBoardNode {
    squareId: SquareId;
    position: BoardNodePosition;
    id: string;
    occupationStatus: NodeOccupationStatus;
    baseCoordinate: Coordinate;
    key: string;
}
// described by square(1-3) (outer=>middle=>inner), and square node position (1-8) (top left, clockwise)
export class BoardNode implements IBoardNode {
    constructor(squareId: SquareId, position: BoardNodePosition){
        this.squareId = squareId;
        this.position = position;
        this.occupationStatus = null;
        this.id = `${squareId}-${position}`;
        this.key = this.id;
        this.baseCoordinate = BoardNode.getBaseCoordinate(squareId, position);
    }

    public static getBaseCoordinate = (squareId: SquareId, position: BoardNodePosition): Coordinate =>{
        //4: container base length = 8(squareid * 2) units left = 0, middle = left(0) + (length/2)(8/2) = 4, right = left(0) + length = 8
        //3: outer base length = 6(squareid * 2) units left = 1, middle = left(1) + (length/2)(6/2) = 4, right = left(1) + length = 7
        //2: middle base length = 4(squareid *2) units left = 1 + 1 = 2, middle = left(2) + (length/2)(4/2) =  4, right = left(2) + length(4) = 6
        //1: inner base length = 2(squareid *2) units left = 1 + 1 + 1, middle = left(3) + (length/2)(2/2) =  4, right = left(3) + length(2) = 5
       const lookup: {[id:string]: number[]} = {
           '3:1': [1,1],    //  top     left
           '3:2': [4,1],    //  top     middle
           '3:3': [7,1],    //  top     right
           '3:4': [7,4],    //  middle  right
           '3:5': [7,7],    //  right   bottom
           '3:6': [4,7],    //  middle  bottom
           '3:7': [1,7],    //  left    bottom
           '3:8': [1,4],    //  left    middle
           '2:1': [2,2],    //  top     left
           '2:2': [4,2],    //  top     middle
           '2:3': [6,2],    //  top     right
           '2:4': [6,4],    //  middle  right
           '2:5': [6,6],    //  right   bottom
           '2:6': [4,6],    //  middle  bottom
           '2:7': [2,6],    //  left    bottom
           '2:8': [2,4],    //  left    middle
           '1:1': [3,3],    //  top     left
           '1:2': [4,3],    //  top     middle
           '1:3': [5,3],    //  top     right
           '1:4': [5,4],    //  middle  right
           '1:5': [5,5],    //  right   bottom
           '1:6': [4,5],    //  middle  bottom
           '1:7': [3,5],    //  left    bottom
           '1:8': [3,4],    //  left    middle
       }
       const entry = lookup[`${squareId}:${position}`];
       return {x: entry[0], y: entry[1]};
    }
    public squareId: SquareId;
    public position: BoardNodePosition;
    public id: string;
    public occupationStatus: NodeOccupationStatus;
    public baseCoordinate: Coordinate;
    public key: string;
    public get poco() : IBoardNode{
        return {
            squareId: this.squareId,
            position: this.position,
            id: this.id,
            occupationStatus: this.occupationStatus,
            baseCoordinate: this.baseCoordinate,
            key: this.key,
        }
    }
}
