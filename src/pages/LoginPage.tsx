import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/react';
import React , { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
    onLogin: () => void;
}
const LoginPage: React.FC<Props> = ({ onLogin }) => {
    const { loggedIn } = useAuth();
    const [ email , setEmail] = useState<any>('');
    const [ password , setPassword] = useState<any>('');

    const handlelogin = async() => {
        const credential = await auth.signInWithEmailAndPassword(email , password)
        console.log('credential: ' , credential);
        onLogin();
    }

    if (loggedIn) {
        return  <Redirect to="/my/entries" />;
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                            <IonInput type="email" value={email}
                             onIonChange={(event) => setEmail(event.detail.value)}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Password</IonLabel>
                            <IonInput type="password" value={password}
                             onIonChange={(event) => setPassword(event.detail.value)}/>
                    </IonItem>
                </IonList>
                    <IonButton expand="block" onClick={onLogin}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
};
export default LoginPage;