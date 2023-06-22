import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // user state
  const [user, setUser] = useState(null);
  // loading data
  const [loading, setLoading] = useState(true);
  // google provider
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();

  // create user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login functionality
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update users name and photo
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout user
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // login with google
  const logInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const logInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // check if the user exists
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // authentication information
  const authInfo = {
    user,
    loading,
    createUser,
    LogIn,
    updateUser,
    LogOutUser,
    logInGoogle,
    logInGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
