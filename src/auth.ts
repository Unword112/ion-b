import React , { useContext, useEffect, useState } from 'react';
import { auth as firebaseAuth } from './firebase';

interface Auth {
    loggedIn: boolean;
    iserId ?: string;
}

interface AuthInit {
    loading: boolean;
    auth?: Auth;
}

export const AuthContext = React.createContext<Auth>({loggedIn: false});

export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthInit(): AuthInit {
    const [authInit , setAuthInit] = useState<AuthInit>({loading: true , auth: {loggedIn: false}});
    useEffect(() => {
    return firebaseAuth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser ?
      { loggedIn: true, userId: firebaseUser.uid} :
      { loggedIn: false};
      setAuthInit({loading: false, auth});
    });
  },[])
  return authInit;
}