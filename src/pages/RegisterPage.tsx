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
    IonInput,
    IonText,
    IonLoading
} from '@ionic/react';
import React , { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
    onLogin: () => void;
}
const RegisterPage: React.FC= ({}) => {
    const { loggedIn } = useAuth();
    const [ email , setEmail] = useState<any>('');
    const [ password , setPassword] = useState<any>('');
    const [status, setStatus] = useState({ loading: false , error: false});

    const handleRegister = async() => {
        try {
        setStatus({loading: true, error: false});
        const credential = await auth.createUserWithEmailAndPassword( email , password)
        setStatus({loading: false , error: false});
        console.log('credential: ' , credential);
        } catch(error) {
        setStatus({loading: false, error: true});
        console.log('error' , error);
    }
}
    if (loggedIn) {
        return  <Redirect to="/my/entries" />;
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>REGISTER</IonTitle>
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
                    {status.error &&
                        <IonText color="danger">invalid</IonText>
                    }
                    <IonButton expand="block" onClick={handleRegister}>Create Account</IonButton>
                    <IonButton expand="block" color="medium" routerLink="/login">Already have once Account</IonButton>
                    <IonLoading isOpen={status.loading} />
            </IonContent>
        </IonPage>
    );
};
export default RegisterPage;