import { Square } from "./Square";
import { IBoardNode } from "./BoardNode";
import { IPlayer, Player } from "./Player";

export interface IGame {
    players: IPlayer[];
    boardNodes: IBoardNode[];
}
export class Game implements IGame {
    // square ids outside in ie: 0:outer, 1: middle, 2: inner
    public static squaresIds = [0, 1, 2];
    constructor(){
        this.players = [new Player(1, true, 'red').poco, new Player(2, false, 'blue').poco];
        const squares: Square[] = [];
        Game.squaresIds.forEach(id => squares.push(new Square(id)));
        squares.forEach(square =>{
            // console.info(square)
            square.nodes.forEach(squareNode=> {
                // console.info(squareNode)
                this.boardNodes.push(squareNode);
            })
        });
        // need to get all nodes and then generate lines
    }
    public players : IPlayer[];
    public boardNodes: IBoardNode[] = [];
}


