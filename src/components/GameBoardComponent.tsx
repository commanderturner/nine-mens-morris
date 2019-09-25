import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { Stage, Layer, Text } from 'react-konva';
import { BoardLine } from './BoardLine';
import { IBoardNode } from '../models/BoardNode';
import { NodeComponent } from './NodeComponent';
import { AppState } from '../store';
import { ISizes } from '../store/game/types';
import { ILine } from '../models/Line';
 
type GameBoardComponentProps = {
  nodes: {[id:string]:IBoardNode};
  lines: {[id:string]: ILine};
  sizes: ISizes;
}
// game has multiplier (eg100) and node size (offset on lines)
// squares generate nodes, but don't store them
// squares generate lines, but dont' store them
// lines have ids and base coords and ids of nodes and use themselves to draw lines
// once created stored in state
// components use multipliers to draw/hide show lines on game update or eg screen resize
const GameBoardComponent: FunctionComponent<GameBoardComponentProps> = ({nodes, lines, sizes}) =>{
  const baseMultiplier = sizes.baseUnits.baseMultiplier;
  const boardNodeComponents = Object.keys(nodes).map((nodeKey: string) => {
    const node = nodes[nodeKey];
    const {x, y} = node.baseCoordinate;
    const size = sizes.baseUnits.squareSize;
    return <NodeComponent key={`node-${nodeKey}`} x={x * baseMultiplier} y={y * baseMultiplier} colour='green' size={size} />
  });
  const lineComponents: JSX.Element[] = [];
  const offset = sizes.baseUnits.squareSize / 2;
  Object.keys(lines).forEach(lineKey => {
    const line = lines[lineKey]
    const x1 = line.baseCoords.start.x * baseMultiplier + offset;
    const y1 = line.baseCoords.start.y  * baseMultiplier + offset;
    const x2 = line.baseCoords.end.x * baseMultiplier + offset;
    const y2= line.baseCoords.end.y * baseMultiplier + offset;
    lineComponents.push(<BoardLine key={`line-${line.id}`} x1={x1} y1={y1} x2={x2} y2={y2} colour='blue' />)
  });
  return (
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {lineComponents}
        </Layer>
        <Layer>
          <Text text="Try click on rect" />
          {boardNodeComponents}
        </Layer>
      </Stage>
  );
}
const mapStateToProps = (state: AppState) => ({
  nodes: state.game.nodes,
  lines: state.game.lines,
  sizes: state.game.sizes,
});

export default connect(
  mapStateToProps,
)(GameBoardComponent);
