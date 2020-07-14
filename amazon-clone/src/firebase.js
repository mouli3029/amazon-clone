import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBc9BxYjgPRw6C3nf-avquOQq3QZ46VhVg",
    authDomain: "clone-1afbb.firebaseapp.com",
    databaseURL: "https://clone-1afbb.firebaseio.com",
    projectId: "clone-1afbb",
    storageBucket: "clone-1afbb.appspot.com",
    messagingSenderId: "266297395869",
    appId: "1:266297395869:web:2ef94ef7172c1e1fe62274",
     measurementId: "G-Q8EKGJVMYV"

})


const auth = firebase.auth();


export {auth};