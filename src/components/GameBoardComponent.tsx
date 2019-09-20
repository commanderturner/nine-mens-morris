import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { Stage, Layer, Text } from 'react-konva';
import { BoardLine } from './BoardLine';
import { IBoardNode } from '../models/BoardNode';
import { NodeComponent } from './NodeComponent';
import { AppState } from '../store';
 
type GameBoardComponentProps = {
  nodes: IBoardNode[],
}
 
const GameBoardComponent: FunctionComponent<GameBoardComponentProps> = ({nodes}) =>{
  const boardNodeComponents = nodes.map((node: IBoardNode) => {
    const {x, y} = node.baseCoordinate;
    return <NodeComponent x={x * 50} y={y * 50} colour='green' />
  });
  return (
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <BoardLine x1={45} y1={45} x2={245} y2={45} colour='blue' />
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
});

export default connect(
  mapStateToProps,
)(GameBoardComponent);
