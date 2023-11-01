import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut}  from "firebase/auth"
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [ user , setUser] = useState(null)
    const [loading , setLodiing] = useState(true)
   
    
    // create user 

    const createUser = (email, password ) => {
        setLodiing(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }
    // sign in 
    const signIn = (email , password) => {
        setLodiing(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
// logOut

const logOut = () => {
    setLodiing(true)
    return signOut (auth)
}
    useEffect(()  => {
      const unsubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user' , currentUser)
            setLodiing(false)
        });
         return () => {
            return unsubscribe();
         }
    },[]) 

const authInfo = {
   user,
   setLodiing,
    createUser,
    signIn,
    logOut,
    loading
}
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;