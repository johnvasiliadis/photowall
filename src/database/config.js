import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCi0ydU9aF1qSufEPLPr9FoVlObXfslDY0",
    authDomain: "resume-cad0f.firebaseapp.com",
    databaseURL: "https://resume-cad0f.firebaseio.com",
    projectId: "resume-cad0f",
    storageBucket: "resume-cad0f.appspot.com",
    messagingSenderId: "639246908199"
}

firebase.initializeApp(config)

const database = firebase.database()

export {database}