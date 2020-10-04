import React, { createContext, useEffect, useState } from "react";

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

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
