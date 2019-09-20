import React, { Component } from 'react';
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

interface AppProps {}
class App extends Component<AppProps> {
  componentDidMount(){
    
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
export default App;