import React, {FunctionComponent} from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
type NodeComponentProps = {
    x: number,
    y: number, 
    colour: string,
}
export const NodeComponent: FunctionComponent<NodeComponentProps> = ({x, y, colour}) => {
    
    const handleClick = () => {
        alert('you want this colour' +Konva.Util.getRandomColor());
    };

      return (
        <Rect
          x={x}
          y={y}
          width={10}
          height={10}
          fill={colour}
          shadowBlur={2}
          onClick={handleClick}
        />
      );
  }