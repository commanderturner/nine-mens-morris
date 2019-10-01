import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import { BoardLine } from './BoardLine';
import { NodeComponent } from './NodeComponent';
import { AppState } from '../store';
import { ISizes } from '../store/app/types';
import { INodeDictionary, ILineDictionary, ITurnDictionary, ICounterDictionary } from '../store/game/types';
import { CounterComponent } from './CounterComponent';
 
type GameBoardComponentProps = {
  nodes: INodeDictionary;
  lines: ILineDictionary;
  counters: ICounterDictionary;
  turns: ITurnDictionary;
  currentTurnId: string | null;
  sizes: ISizes;
}
// game has multiplier (eg100) and node size (offset on lines)
// squares generate nodes, but don't store them
// squares generate lines, but dont' store them
// lines have ids and base coords and ids of nodes and use themselves to draw lines
// once created stored in state
// components use multipliers to draw/hide show lines on game update or eg screen resize
const GameBoardComponent: FunctionComponent<GameBoardComponentProps> = ({nodes, lines, counters, sizes, turns, currentTurnId}) =>{
  const getClickHandler = (): ((id:string)=>void) | null=>{
    const currentTurn = currentTurnId ? turns[currentTurnId] : null;
    if (!currentTurn) return null;
    switch (currentTurn.phase){
      case 'deploy': return (id)=>alert(`you are deploying counter to node ${id}`)
      case 'move': return (id)=>alert(`you are selecting node ${id} and should not be a counter here so should not do anything`)
    }
  }
  const baseMultiplier = sizes.baseUnits.baseMultiplier;
  const boardNodeComponents = Object.keys(nodes).map((nodeKey: string) => {
    const node = nodes[nodeKey];
    const {x, y} = node.baseCoordinate;
    const size = sizes.baseUnits.squareSize;
    return (
    <NodeComponent 
      boardNodeId={nodeKey}
      clickHandler={getClickHandler()}
      key={`node-${nodeKey}`} 
      x={x * baseMultiplier} 
      y={y * baseMultiplier} 
      colour='green' 
      size={size} 
    />);
  });
  const counterComponents = Object.keys(counters)
  .filter((counterKey=> counters[counterKey].status==='in-play'))
  .map((counterKey: string)=>{
    const counter = counters[counterKey];
    const {x, y} = counter.baseCoordinate ? counter.baseCoordinate : {x:0, y: 0};
    const radius = (sizes.baseUnits.squareSize) * 2;
    return (
    <CounterComponent 
      counterId={counterKey}
      clickHandler={getClickHandler()}
      key={`counter-${counterKey}`} 
      x={x * baseMultiplier} 
      y={y * baseMultiplier} 
      colour={counter.colour} 
      radius={radius} 
    />);
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
      <Stage id={'stage'} width={window.innerWidth * 0.8} height={window.innerWidth * 0.8}>
        <Layer>
          {lineComponents}
        </Layer>
        <Layer>
          {boardNodeComponents}
        </Layer>
        <Layer>{counterComponents}</Layer>
      </Stage>
  );
}
const mapStateToProps = (state: AppState) => ({
  nodes: state.game.nodes,
  lines: state.game.lines,
  counters: state.game.counters,
  turns: state.game.turns,
  currentTurnId: state.game.currentTurnId,
  sizes: state.app.sizes,
});

export default connect(
  mapStateToProps,
)(GameBoardComponent);
