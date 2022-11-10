import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(app);

const auth = getAuth();
const UserContext = ({ children }) => {
  const [loadin, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleUserRegister = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const newUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInFo = {
    user,
    loadin,
    googleUserRegister,
    logOut,
    newUserRegister,
    logInUser,
  };
  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
