import React, { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { BoardNode } from './BoardNode';
import { BoardLine } from './BoardLine';
 

 
export class GameBoard extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <BoardLine x1={45} y1={45} x2={245} y2={45} colour='blue' />
        </Layer>
        <Layer>
          <Text text="Try click on rect" />
          <BoardNode x={20} y={20} colour='green' />
          <BoardNode x={220} y={20} colour='green' />
          <BoardNode x={420} y={20} colour='green' />
          <BoardNode x={20} y={220} colour='green' />
          <BoardNode x={220} y={220} colour='green' />
          <BoardNode x={420} y={220} colour='green' />
          <BoardNode x={20} y={420} colour='green' />
          <BoardNode x={220} y={420} colour='green' />
          <BoardNode x={420} y={420} colour='green' />
        </Layer>
      </Stage>
    );
  }
}
 