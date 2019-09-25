import { NodeOccupationStatus, IBoardNode, Coordinate, BoardNodePosition } from "./BoardNode";

export interface ILineBaseCoords {
    start: Coordinate,
    end: Coordinate,
}

export type LinePostion = 'top' | 'right' | 'bottom' | 'left' | 'middle-top' | 'middle-right' | 'middle-bottom' | 'middle-left'
export interface ILine {
    id: string;
    position: LinePostion;
    nodeIds: string[];
    baseCoords: ILineBaseCoords;
    isMill: boolean;
    occupationStatus: LineOccupationStatus;
    orientation: LineOrientation;
}
/**
 * A Line is used for game logic and contains the 3 node ids
 * that make it up.  It is also used to generate drawing on canvas/document
 * @export
 * @class Line
 */
export class Line {
    constructor(id: string, position: LinePostion, nodes: Array<IBoardNode>, orientation: LineOrientation){
        this.id = id;
        this.position = position;
        this.nodes= nodes;
        this.orientation = orientation;
        this.isMill = false;
        this.occupationStatus = null;
    }
    public id: string;
    public nodes: Array<IBoardNode>
    public orientation: LineOrientation;
    public isMill: boolean;
    public occupationStatus: LineOccupationStatus;
    public position: LinePostion;
    // public getLineData(): LineData {
    //     const lineOccupationStatus = this.nodes.every(node => node.occupationStatus === 1) 
    //     ? 1 as PlayerId
    //     : this.nodes.every(node => node.occupationStatus === 2) 
    //         ? 2 as PlayerId
    //         : this.nodes.every(node => node.occupationStatus === null)
    //             ? null
    //             : 'mixed';
    //     let isMill = lineOccupationStatus === null  || lineOccupationStatus === 'mixed' ? false : true;
    //     const lineData: LineData = {
    //         isMill, 
    //         lineOccupationStatus,
    //     }
    //     return lineData;
    // }
    public get poco(): ILine {
        return {
            id: this.id,
            baseCoords: {
                start: this.nodes[0].baseCoordinate,
                end: this.nodes[2].baseCoordinate,
            },
            nodeIds: [this.nodes[0].id, this.nodes[1].id, this.nodes[2].id],
            isMill: this.isMill,
            occupationStatus: this.occupationStatus,
            orientation: this.orientation,
            position: this.position,
        }
    }
    public static getOrientationFromId(id: number, isMiddleNodesLine=false): LineOrientation {
        const isEven = id % 2 === 0;
        if( isMiddleNodesLine) return isEven ? 'horizontal' : 'vertical';
        return  isEven ? 'vertical' : 'horizontal';
    }
    public static getPositionFromNumberLookup(index: number): LinePostion{
        const dictionary: {[id: number]: LinePostion} = {
            1: 'top',
            2: 'right',
            3: 'bottom',
            4: 'left',
            5: 'middle-top',
            6: 'middle-right',
            7: 'middle-bottom',
            8: 'middle-left',
        }
        return dictionary[index];
    }
    public static getNodePositionForMiddleLine(position: LinePostion): BoardNodePosition{
        const dictionary: {[id: string]: BoardNodePosition} = {
            'middle-right': 4,
            'middle-bottom': 6,
            'middle-left': 8,
            'middle-top': 2,
        }
        return dictionary[position];
    }
}
export type LineOrientation = 'vertical' | 'horizontal';
export type LineOccupationStatus = NodeOccupationStatus | 'mixed';
export type LineData = {
    isMill: boolean;
    lineOccupationStatus: LineOccupationStatus
}