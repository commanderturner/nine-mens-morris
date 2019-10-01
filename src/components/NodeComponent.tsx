import React, {FunctionComponent} from 'react';
import { Rect } from 'react-konva';
// import Konva from 'konva';
type NodeComponentProps = {
    x: number,
    y: number, 
    colour: string,
    size: number,
    boardNodeId: string,
    clickHandler: ((boardNodeId: string)=>void) | null;
}
export const NodeComponent: FunctionComponent<NodeComponentProps> = ({x, y, colour, size, boardNodeId, clickHandler}) => {
    
    const handleClick = () => {
        // alert('you want this colour' + Konva.Util.getRandomColor());
        if(clickHandler) clickHandler(boardNodeId);
    };

      return (
        <Rect
          x={x}
          y={y}
          width={size}
          height={size}
          fill={colour}
          shadowBlur={2}
          onClick={handleClick}
        />
      );
  }