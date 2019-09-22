import React, { Component } from 'react';
import {connect} from 'react-redux';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
import GameBoardComponent from './components/GameBoardComponent';
import NewGameButton from './components/NewGameButton';
import { AppState } from './store';
import { ISizes } from './store/game/types';
import { setGameSizes } from './store/game/actions';

interface AppProps {
  sizes: ISizes;
  setGameSizes: typeof setGameSizes;
}
class App extends Component<AppProps> {
  handleResize = ()=>{
    const windowDimensions = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    const baseMultiplier = windowDimensions.width / this.props.sizes.baseUnits.boardAreaLength;
    const sizes = {...this.props.sizes};
    sizes.window = windowDimensions;
    sizes.baseUnits.baseMultiplier = baseMultiplier;
    sizes.baseUnits.squareSize = Math.round(baseMultiplier / 10);
    this.props.setGameSizes(sizes);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Nine Men's Morris</IonCardSubtitle>
              <IonCardTitle>HTML version of the game</IonCardTitle>
            </IonCardHeader>
            <NewGameButton/>
          </IonCard>
          <IonCard><GameBoardComponent/></IonCard>
        </IonContent>
      </IonApp>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  sizes: state.game.sizes,
});

export default connect(
  mapStateToProps,
  {setGameSizes}
)(App);
