import { Square } from "./Square";
import { SquareNode } from "./SquareNode";

export type PlayerId = 'red' | 'blue';

export class Game {
    // square ids outside in ie: 0:outer, 1: middle, 2: inner
    public static squaresIds = [0, 1, 2];
    constructor(){
        this.players = [new Player('red', true), new Player('blue')];
        Game.squaresIds.forEach(id => this.squares.push(new Square(id)));
        // need to get all nodes and then generate lines
    }
    public players : Array<Player>;
    public squares : Array<Square> = [];
    public get allNodes(){
        const allNodes: Array<SquareNode> = [];
        this.squares.forEach(square =>
            square.nodes.forEach(squareNode=> allNodes.push(squareNode)))
        return allNodes;
    }

}

export class Player {
    constructor(id: PlayerId, isFirst = false){
        this.id = id;
        this.isFirst = isFirst;
    }
    public readonly id: PlayerId;
    public readonly isFirst: boolean;
}