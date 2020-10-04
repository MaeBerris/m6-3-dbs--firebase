import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

export const AppContext = createContext(null);

var firebaseConfig = {
  apiKey: "AIzaSyABJVniFMAQjsU1GHNBHGJH6xl-AV7B9qs",
  authDomain: "user-app-a74a8.firebaseapp.com",
  databaseURL: "https://user-app-a74a8.firebaseio.com",
  projectId: "user-app-a74a8",
  storageBucket: "user-app-a74a8.appspot.com",
  messagingSenderId: "425937931316",
  appId: "1:425937931316:web:fbcd34b13e2cedc1858e61",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});

  const handleSignOut = () => {
    signOut();
    setAppUser({});
  };

  useEffect(() => {
    if (user) {
      setAppUser({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      });
    }
  }, [user]);
  return (
    <AppContext.Provider value={{ appUser, signInWithGoogle, handleSignOut }}>
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(AppProvider);
