import { Square, SquareId, ISquare } from "./Square";
import { IBoardNode } from "./BoardNode";
import { IPlayer, Player } from "./Player";
import { ILine } from "./Line";

export interface IGame {
    players: {[id: number]: IPlayer};
    nodes: {[id:string]:IBoardNode};
    squares: {[id:number]: ISquare};
    lines: {[id:string]: ILine};
}
export class Game implements IGame {
    // square ids outside in ie: 1:outer, 2: middle, 3: inner
    public static squaresIds: SquareId[] = [1, 2, 3];
    constructor(){
        this.players = {
            1: new Player(1, true, 'red').poco,
            2: new Player(2, false, 'blue').poco
        };
        Game.squaresIds.forEach(id => {
            const square = new Square(id);
            const squareNodes = square.getNodes();
            squareNodes.forEach(squareNode=> {
                // console.info(squareNode)
                this.nodes[squareNode.id] = squareNode;
            });
            this.squares[id] = square.poco;
            const squareLines = square.getLines();
            squareLines.forEach(line => this.lines[line.id] = line)
        });
    }
    public players : {[id: number]: IPlayer};
    public nodes: {[id:string]:IBoardNode} = {};
    public squares: {[id:number]: ISquare} = {};
    public lines: {[id:string]: ILine} = {};

}


