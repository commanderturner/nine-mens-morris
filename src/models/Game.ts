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
    
        Game.squaresIds.forEach(id => {
            const square = new Square(id);
            const squareNodes = square.getNodes();
            squareNodes.forEach(squareNode=> {
                // console.info(squareNode)
                this.boardNodes.push(squareNode);
            });
            this.squares.push(square.poco)
        });
    }
    public players : IPlayer[];
    public boardNodes: IBoardNode[] = [];
    public squares: ISquare[] = [];
}


