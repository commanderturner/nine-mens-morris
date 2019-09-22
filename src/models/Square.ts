import { BoardNode, IBoardNode, BoardNodePosition } from "./BoardNode";
import { ILine, Line, LineOrientation, LinePostion } from "./Line";
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
        const min = 4 - id;
        const middle = min + (id);
        const max = min + length;
        this.baseUnitDetails = {
            length,
            min,
            middle,
            max,
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
    // square's lines start 1-top, 2-right, 3-bottom, 4-left
    public getLines(): ILine[]{
        const lines = [];
        const nodesAsDictionary = this.getNodes().reduce((dictionary, node)=> {
            dictionary[node.id] = node;
            return dictionary
        }, {} as {[id: string]: IBoardNode});
        for(let i= 1; i <= 4; i++){
            const nodesForLine = this.getNodesForLine(i as LinePostion, nodesAsDictionary);
            const line = new Line(`${this.id}-${i}`, i as LinePostion, nodesForLine,this.getOrientationFromId(i) );
            lines.push(line.poco);
        }
        return lines;
    }
    private getOrientationFromId(id: number): LineOrientation {
        return id % 2 === 0 ? 'vertical' : 'horizontal';
    }
    private getNodesForLine(position: LinePostion, nodesAsDictionary: {[id: string]: IBoardNode}): IBoardNode[]{
        const startNode = position === 1 ? 1 : position === 2 ? 3 : position === 3 ? 5 : 7; 
        const middleNode = startNode + 1;
        const endNode = startNode + 2 > 8 ? 1 : startNode + 2;
        const nodeIds = [`${this.id}-${startNode}`, `${this.id}-${middleNode}`, `${this.id}-${endNode}`];
        const nodes = nodeIds.map(nodeId => nodesAsDictionary[nodeId]);
        return nodes;
    }
}

export type SquareId = 1 | 2 | 3;
export type BaseUnitDetails = {
    length: number;
    min: number;
    middle: number;
    max: number;
}