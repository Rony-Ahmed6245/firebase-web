
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase.config';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';

export const Authcontext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
        .then()
        .catch()
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('hello,',currentUser);
        });
        return () =>{
            unsubscribe()
        }
    },[])


    const authinfo ={user, createUser, signInUser, logOut}

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node ,
};

export default AuthProvider;