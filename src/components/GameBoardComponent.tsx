import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { Stage, Layer, Text } from 'react-konva';
import { BoardLine } from './BoardLine';
import { IBoardNode } from '../models/BoardNode';
import { NodeComponent } from './NodeComponent';
import { AppState } from '../store';
import { ISquare } from '../models/Square';
 
type GameBoardComponentProps = {
  nodes: IBoardNode[],
  squares: ISquare[],
}
// [TODO] put nodes in separate dictionary
// game has multiplier (eg100) and node size (offset on lines)
// squares generate nodes, but don't store them
// squares generate lines, but dont' store them
// lines have ids and base coords and ids of nodes and use themselves to draw lines
// once created stored in state
// components use multipliers to draw/hide show lines on game update or eg screen resize
const GameBoardComponent: FunctionComponent<GameBoardComponentProps> = ({nodes, squares}) =>{
  const boardNodeComponents = nodes.map((node: IBoardNode) => {
    const {x, y} = node.baseCoordinate;
    return <NodeComponent x={x * 50} y={y * 50} colour='green' />
  });
  if (squares) console.info('squares');
  // const lines = [];
  return (
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* Square 3 */}
          <BoardLine x1={55} y1={55} x2={355} y2={55} colour='blue' />
          <BoardLine x1={355} y1={55} x2={355} y2={355} colour='blue' />
          <BoardLine x1={355} y1={355} x2={55} y2={355} colour='blue' />
          <BoardLine x1={55} y1={355} x2={55} y2={55} colour='blue' />
          {/* Square 2 */}
          <BoardLine x1={105} y1={105} x2={305} y2={105} colour='blue' />
          <BoardLine x1={305} y1={105} x2={305} y2={305} colour='blue' />
          <BoardLine x1={305} y1={305} x2={105} y2={305} colour='blue' />
          <BoardLine x1={105} y1={305} x2={105} y2={105} colour='blue' />
          {/* Square 3 */}
          <BoardLine x1={155} y1={155} x2={255} y2={155} colour='blue' />
          <BoardLine x1={255} y1={155} x2={255} y2={255} colour='blue' />
          <BoardLine x1={255} y1={255} x2={155} y2={255} colour='blue' />
          <BoardLine x1={155} y1={255} x2={155} y2={155} colour='blue' />
          {/* Mid lines */}
          <BoardLine x1={205} y1={55} x2={205} y2={155} colour='blue' />
          <BoardLine x1={355} y1={205} x2={255} y2={205} colour='blue' />
          <BoardLine x1={205} y1={355} x2={205} y2={255} colour='blue' />
          <BoardLine x1={55} y1={205} x2={155} y2={205} colour='blue' />
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
  squares: state.game.squares,
});

export default connect(
  mapStateToProps,
)(GameBoardComponent);
