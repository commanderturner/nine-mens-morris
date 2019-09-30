import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import { IonButton } from '@ionic/react';
import { Game } from '../models/Game';
import { setGameState, setTurn } from '../store/game/actions';

interface NewGameButtonProps {
    setGameState : typeof setGameState;
    setTurn: typeof setTurn;
}

const NewGameButton: FunctionComponent<NewGameButtonProps> = ({setGameState, setTurn}) => {

    const handleClick = () => {
        // alert('you asked for a new game');
        const game = new Game();
        const firstTurnKey = Object.keys(game.turns)[0];
        setGameState(game.players, game.nodes, game.squares, game.lines, game.counters);
        setTurn(game.turns[firstTurnKey]);
    };

      return (
          <IonButton onClick={handleClick}>Start a new game </IonButton>
      );
  }
  export default connect(
    null,
    {setGameState, setTurn}
  )(NewGameButton);