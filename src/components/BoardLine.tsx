import React, {FunctionComponent} from 'react';
import { Line } from 'react-konva';
import Konva from 'konva';
export type BoardLineProps = {
    x1: number,
    x2: number,
    y1: number, 
    y2: number, 
    colour: string,
}
export const BoardLine: FunctionComponent<BoardLineProps> = ({x1, y1, x2, y2,colour='blue'}) => {
    
    const handleClick = () => {
        alert('you want this colour' +Konva.Util.getRandomColor());
    };

      return (
        <Line
          points={[x1,y1,x2,y2]}
          width={50}
          height={50}
          stroke={colour}
          shadowBlur={5}
          onClick={handleClick}
        />
      );
  }