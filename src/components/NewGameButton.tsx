import React, {FunctionComponent} from 'react';
import { IonButton } from '@ionic/react';

type NewGameButtonProps = {
}
export const NewGameButton: FunctionComponent<NewGameButtonProps> = () => {

    const handleClick = () => {
        alert('you asked for a new game');
    };

      return (
          <IonButton onClick={handleClick}>Start a new game </IonButton>
      );
  }