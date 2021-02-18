import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTab';
import { AuthContext , useAuthInit } from './auth';
import NoFoundPage from './pages/NoFoundPage';
import RegisterPage from './pages/RegisterPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const { loading, auth } = useAuthInit();

  console.log(`redering App with LoggedIn=${auth}`)

  if(loading) {
    return <IonLoading isOpen />;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
      <IonReactRouter>
        <Switch>
          <Route exact path="/login"  >
            <LoginPage />
          </Route>
          <Route exact path="/Register"  >
            <RegisterPage />
          </Route>
          <Route path="/my">
            <AppTabs/>
          </Route>
          <Redirect exact path="/" to="/my/entries" />
          <Route>
            <NoFoundPage/>
          </Route>
          </Switch>
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  )
};

export default App;
