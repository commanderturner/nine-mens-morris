import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { AppState } from '../store';
import { IonCardSubtitle } from '@ionic/react';
import { IPlayerDictionary, ITurnDictionary } from '../store/game/types';
 
type PlayerInfoComponentProps = {
  players: IPlayerDictionary;
  turns: ITurnDictionary;
  currentTurnId: string | null;
}

const PlayerInfoComponent: FunctionComponent<PlayerInfoComponentProps> = ({players, turns, currentTurnId}) =>{
  const playerInfo = 
  Object.keys(players).map(playerKey=> {
    const player = players[Number(playerKey)];
    return <div key={`player-name-${playerKey}`}>{player.name}</div>
  });
  const turnInfo = currentTurnId ? <div>{turns[currentTurnId].instruction}</div> : null;
  return (
    <IonCardSubtitle>{playerInfo}{turnInfo}</IonCardSubtitle>
  );
}
const mapStateToProps = (state: AppState) => ({
  players: state.game.players,
  turns: state.game.turns,
  currentTurnId: state.game.currentTurnId,
});

export default connect(
  mapStateToProps,
)(PlayerInfoComponent);
