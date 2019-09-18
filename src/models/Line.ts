import { NodeOccupationStatus, IBoardNode } from "./BoardNode";
import { PlayerId } from "./Player";


/**
 * A Line is used for game logic and contains the 3 node ids
 * that make it up.  It is also used to draw on canvas/document
 *
 * @export
 * @class Line
 */
export class Line {
    constructor(id: string, nodes: Array<IBoardNode>, orientation: LineOrientation){
        this.id = id;
        this.nodes= nodes;
        this.orientation = orientation;
    }
    private id: string;
    private nodes: Array<IBoardNode>
    private orientation: LineOrientation;

    public getLineData(): LineData{
        const lineOccupationStatus = this.nodes.every(node => node.occupationStatus === 1) 
        ? 1 as PlayerId
        : this.nodes.every(node => node.occupationStatus === 2) 
            ? 2 as PlayerId
            : this.nodes.every(node => node.occupationStatus === null)
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