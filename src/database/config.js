import * as firebase from 'firebase'

var config = {
    apiKey: process.env.FBAPIKEY,
    authDomain: "photowall-cd818.firebaseapp.com",
    databaseURL: "https://photowall-cd818.firebaseio.com",
    projectId: "photowall-cd818",
    storageBucket: "photowall-cd818.appspot.com",
    messagingSenderId: "281883264847"
}

firebase.initializeApp(config)

const database = firebase.database()

export {database}