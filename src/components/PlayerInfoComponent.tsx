import React, { FunctionComponent } from 'react';
import {connect } from 'react-redux';
import { AppState } from '../store';
import { IPlayer } from '../models/Player';
import { IonCardSubtitle } from '@ionic/react';
 
type PlayerInfoComponentProps = {
  players: {[id:number]:IPlayer};
}

const PlayerInfoComponent: FunctionComponent<PlayerInfoComponentProps> = ({players}) =>{
  const playerInfo = 
  Object.keys(players).map(playerKey=> {
    const player = players[Number(playerKey)];
    return <div key={`player-name-${playerKey}`}>{player.name}</div>
  })
  return (
    <IonCardSubtitle>{playerInfo}</IonCardSubtitle>
  );
}
const mapStateToProps = (state: AppState) => ({
  players: state.game.players,
});

export default connect(
  mapStateToProps,
)(PlayerInfoComponent);
