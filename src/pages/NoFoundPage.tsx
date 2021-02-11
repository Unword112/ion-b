import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonRouterLink 
} from '@ionic/react';
const NoFoundPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                404 Page not found...
            </IonContent>
        </IonPage>
    );
};
export default NoFoundPage;
