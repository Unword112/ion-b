import React , { useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTab';
import { AuthContext } from './auth';
import NoFoundPage from './pages/NoFoundPage';

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
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`loggedIn= ${loggedIn}`);
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
      <IonReactRouter>
        <Switch>
          <Route exact path="/login"  >
            <LoginPage onLogin={() => setLoggedIn(true)}
            />
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
