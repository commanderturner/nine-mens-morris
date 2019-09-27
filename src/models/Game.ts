import { Square, SquareId } from "./Square";
import { IBoardNode } from "./BoardNode";
import { Player } from "./Player";
import { ILine, Line } from "./Line";
import { IGamePieces, IPlayerDictionary, INodeDictionary, ISquareDictionary, ILineDictionary, ICounterDictionary } from "../store/game/types";
export class Game implements IGamePieces {
    // square ids outside in ie: 1:outer, 2: middle, 3: inner
    public static squaresIds: SquareId[] = [1, 2, 3];
    constructor(){
        this.players = {
            1: new Player(1, true, 'red').poco,
            2: new Player(2, false, 'blue').poco
        };
        let counters: ICounterDictionary = {};
        Object.keys(this.players).forEach(playerId=>{
            counters = {...counters, ...Player.getCounters(this.players[Number(playerId)])}
        })
        this.counters = counters;
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
        const middleLines = this.getMiddleLines();
        middleLines.forEach(middleLine=>{
            this.lines[middleLine.id] = middleLine;
        })
    }
    private getMiddleLines(): ILine[]{
            const lines = [];
            const squareIds = Object.keys(this.squares);
            for(let i= 5; i <= 8; i++){
                const nodesForLine: IBoardNode[] = []
                const linePosition = Line.getPositionFromNumberLookup(i);
                const nodePosition = Line.getNodePositionForMiddleLine(linePosition);
                squareIds.forEach((squareId)=>{
                    const nodeId = `${squareId}-${nodePosition}`
                    const node = this.nodes[nodeId];
                    nodesForLine.push(node);
                })
                const line = new Line(`${linePosition}`, linePosition, nodesForLine,Line.getOrientationFromId(i,true) );
                lines.push(line.poco);
            }
            return lines;
    }


    public players : IPlayerDictionary;
    public nodes:INodeDictionary = {};
    public squares: ISquareDictionary = {};
    public lines: ILineDictionary = {};
    public counters: ICounterDictionary = {};

}


