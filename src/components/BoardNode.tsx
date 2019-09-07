import React, {FunctionComponent} from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
type BoardNodeProps = {
    x: number,
    y: number, 
    colour: string,
}
export const BoardNode: FunctionComponent<BoardNodeProps> = ({x, y, colour}) => {
    
    const handleClick = () => {
        alert('you want this colour' +Konva.Util.getRandomColor());
    };

      return (
        <Rect
          x={x}
          y={y}
          width={50}
          height={50}
          fill={colour}
          shadowBlur={5}
          onClick={handleClick}
        />
      );
  }