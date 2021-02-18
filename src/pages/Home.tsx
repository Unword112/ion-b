import { IonContent, IonHeader,
         IonPage,
         IonTitle,
         IonToolbar,
         IonButton
         } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { auth } from '../firebase';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
  
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
