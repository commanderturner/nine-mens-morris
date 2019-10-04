import React, {FunctionComponent} from 'react';
import { Rect } from 'react-konva';
// import Konva from 'konva';
type NodeComponentProps = {
    x: number,
    y: number, 
    colour: string,
    size: number,
    boardNodeId: string,
    clickHandler: ((nodeId:string) => void) | null,
}
export const NodeComponent: FunctionComponent<NodeComponentProps> = ({x, y, colour, size, boardNodeId, clickHandler}) => {
    
    const handleClick = () => {
      if(clickHandler) clickHandler(boardNodeId);
      // alert('you clicked')
    }

    return (
        <Rect
          x={x}
          y={y}
          width={size}
          height={size}
          fill={colour}
          shadowBlur={2}
          onClick={handleClick}
          onTap={handleClick}
        />
      );
  }