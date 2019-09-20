import { Square, SquareId, ISquare } from "./Square";
import { IBoardNode } from "./BoardNode";
import { IPlayer, Player } from "./Player";

export interface IGame {
    players: IPlayer[];
    boardNodes: IBoardNode[];
    squares: ISquare[];
}
export class Game implements IGame {
    // square ids outside in ie: 1:outer, 2: middle, 3: inner
    public static squaresIds: SquareId[] = [1, 2, 3];
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
            this.squares.push(square.poco)
        });

    }
    public players : IPlayer[];
    public boardNodes: IBoardNode[] = [];
    public squares: ISquare[] = [];
}


