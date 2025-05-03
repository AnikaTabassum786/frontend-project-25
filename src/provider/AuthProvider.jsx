import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  console.log(user)

  const createUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser =(email,password)=>{
    setLoader(true)
   return  signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    setLoader(true)
    return signOut(auth)
  }
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoader(false)
    });
    return ()=>{
      unSubscribe()
    }
  },[])
    
  const authData ={
    user,
    setUser,
    createUser,
    signInUser,
    logOut,
    loader
  }
    return (
        <>
        <AuthContext value={authData}>
        {children}
        </AuthContext>
        </>
    );
};

export default AuthProvider;