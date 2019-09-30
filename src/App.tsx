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
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';
import GameBoardComponent from './components/GameBoardComponent';
import NewGameButton from './components/NewGameButton';
import { AppState } from './store';
import { ISizes } from './store/app/types';
import { setAppSizes } from './store/app/actions';
import PlayerInfoComponent from './components/PlayerInfoComponent';

interface AppProps {
  sizes: ISizes;
  setAppSizes: typeof setAppSizes;
}
class App extends Component<AppProps> {
  handleResize = ()=>{
    const windowDimensions = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    const baseMultiplier = (windowDimensions.width * 0.8) / this.props.sizes.baseUnits.boardAreaLength;
    const sizes = {...this.props.sizes};
    sizes.window = windowDimensions;
    sizes.baseUnits.baseMultiplier = baseMultiplier;
    sizes.baseUnits.squareSize = Math.round(baseMultiplier / 10);
    this.props.setAppSizes(sizes);
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
              <IonCardSubtitle>A battle of mills</IonCardSubtitle>
              <IonCardTitle>Nine Men's Morris</IonCardTitle>
            </IonCardHeader>
            <IonCardContent><NewGameButton/></IonCardContent>
          </IonCard>
          <IonCard id={'stage-card'}>
            <IonCardHeader>
              <PlayerInfoComponent />
            </IonCardHeader>
            <IonCardContent>
              <GameBoardComponent/>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  sizes: state.app.sizes,
});

export default connect(
  mapStateToProps,
  {setAppSizes}
)(App);
