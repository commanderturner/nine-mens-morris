import React, {FunctionComponent} from 'react';
import { Circle } from 'react-konva';
// import Konva from 'konva';
type CounterComponentProps = {
    counterId: string;
    x: number,
    y: number, 
    colour: string,
    radius: number,
    clickHandler: ((boardNodeId: string)=>void) | null;
}
export const CounterComponent: FunctionComponent<CounterComponentProps> = ({counterId, x, y, colour, radius, clickHandler}) => {
    
    const handleClick = () => {
        // alert('you want this colour' + Konva.Util.getRandomColor());
      if(clickHandler) clickHandler(counterId);
    };

      return (
        <Circle
          x={x}
          y={y}
          radius={radius}
          fill={colour}
          shadowBlur={2}
          onClick={handleClick}
        />
      );
  }