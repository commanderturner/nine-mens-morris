import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import { IonButton } from '@ionic/react';
import { Game, Player } from '../models/Game';
import { setGameState } from '../store/game/actions';
import { SquareNode } from '../models/SquareNode';

type NewGameButtonProps = {
}
const NewGameButton: FunctionComponent<NewGameButtonProps> = () => {

    const handleClick = () => {
        alert('you asked for a new game');
        const game = new Game();
        const players = game.players;
        const nodes = game.allNodes;
        setGameState(players, nodes)
    };

      return (
          <IonButton onClick={handleClick}>Start a new game </IonButton>
      );
  }

  const mapDispatchToProps = (dispatch: any) => {
    return {
      setGameState: (players: Player[], nodes: SquareNode[]) => dispatch(setGameState(players, nodes))
    };
  };
  export default connect(
    null,
    mapDispatchToProps
  )(NewGameButton);