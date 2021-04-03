import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../../configs/firebaseConfigs';

export const initializeLogInFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app()
    }
};


export const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(gProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = {
                name: displayName,
                email
            }
            return signedInUser;

        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
};


