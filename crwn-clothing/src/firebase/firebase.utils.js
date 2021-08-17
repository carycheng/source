import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpWD8JCBv3CKit0dR8qK0YA-V22Y8ABgM",
    authDomain: "crwn-db-69cc7.firebaseapp.com",
    projectId: "crwn-db-69cc7",
    storageBucket: "crwn-db-69cc7.appspot.com",
    messagingSenderId: "168079905680",
    appId: "1:168079905680:web:443aef04ba67a91ea99915",
    measurementId: "G-7K65K5TXCP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firsbase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
