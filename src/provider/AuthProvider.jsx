import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);

  console.log(user)

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser =(email,password)=>{
   return  signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    return signOut(auth)
  }
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
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
    logOut
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