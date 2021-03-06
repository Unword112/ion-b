import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/react';
import React from 'react';
import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons'
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
import Entry from './pages/Entry';
import { useAuth } from './auth';

const AppTabs: React.FC = () => {
  const {loggedIn } = useAuth();
  if(!loggedIn){
    return <Redirect to="/login" />
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/my/entries" >
          <HomePage />
        </Route>
        <Route exact path="/my/entry/:id" component={Entry} />
        <Route exact path="/my/settings" component={SettingPage} />
        <Route exact path="/" render={() => <Redirect to="/my/entries" />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/entries">
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
};
export default AppTabs;