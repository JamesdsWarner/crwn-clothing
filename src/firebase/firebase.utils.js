import firebase from 'firebase/compat/app'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCerAxPwlN-gA7K5Q8M1rYiisVpEKOjup4",
  authDomain: "crwn-db-8c8ec.firebaseapp.com",
  projectId: "crwn-db-8c8ec",
  storageBucket: "crwn-db-8c8ec.appspot.com",
  messagingSenderId: "543521271767",
  appId: "1:543521271767:web:84514068e41a5f00746592",
  measurementId: "G-1BTY2EGB16"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()


    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error)  {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;