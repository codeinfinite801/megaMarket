import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Provider";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (courantUser) => {
      setUser(courantUser);
      setLoading(false);

    });
    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    user,
    loading,
    createUser,
    userSignIn,
    logOut,
    signInWithGoogle,
    updateUser
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;