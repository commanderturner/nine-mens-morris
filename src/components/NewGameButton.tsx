import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import { IonButton } from '@ionic/react';
import { Game } from '../models/Game';
import { setGameState } from '../store/game/actions';

interface NewGameButtonProps {
    setGameState : typeof setGameState;
}

const NewGameButton: FunctionComponent<NewGameButtonProps> = ({setGameState}) => {

    const handleClick = () => {
        // alert('you asked for a new game');
        const game = new Game();
        setGameState(game.players, game.nodes, game.squares, game.lines, game.counters)
    };

      return (
          <IonButton onClick={handleClick}>Start a new game </IonButton>
      );
  }
  export default connect(
    null,
    {setGameState}
  )(NewGameButton);