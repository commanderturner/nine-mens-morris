import { SquareNode, NodeOccupationStatus } from "./SquareNode";
import { node } from "prop-types";
import { PlayerId } from "./Game";


/**
 * A Line is used for game logic and contains the 3 node ids
 * that make it up.  It is also used to draw on canvas/document
 *
 * @export
 * @class Line
 */
export class Line {
    constructor(id: string, nodes: Array<SquareNode>, orientation: LineOrientation){
        this._id = id;
        this._nodes = nodes;
        this._orientation = orientation;
    }
    private _id: string;
    private _nodes: Array<SquareNode>
    private _orientation: LineOrientation;
    public get id():string{
        return this._id;
    }
    public get nodes(): Array<SquareNode>{
        return this._nodes;
    }
    public get orientation(): LineOrientation{
        return this._orientation;
    }
    public getLineData(): LineData{
        const lineOccupationStatus = this._nodes.every(node => node.occupationStatus === 'blue') 
        ? 'blue' as PlayerId
        : this._nodes.every(node => node.occupationStatus === 'red') 
            ? 'red' as PlayerId
            : this._nodes.every(node => node.occupationStatus === null)
                ? null
                : 'mixed';
        let isMill = lineOccupationStatus === null  || lineOccupationStatus === 'mixed' ? false : true;
        const lineData: LineData = {
            isMill, 
            lineOccupationStatus,
        }
        return lineData;
    }
}
export type LineOrientation = 'vertical' | 'horizontal';
export type LineOccupationStatus = NodeOccupationStatus | 'mixed';
export type LineData = {
    isMill: boolean;
    lineOccupationStatus: LineOccupationStatus
}