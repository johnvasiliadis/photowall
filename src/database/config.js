import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDHLOb6FqpYJV166ES_NBS6ezoaeVuIldE",
    authDomain: "photowall-3546e.firebaseapp.com",
    databaseURL: "https://photowall-3546e.firebaseio.com",
    projectId: "photowall-3546e",
    storageBucket: "photowall-3546e.appspot.com",
    messagingSenderId: "24930569488"
}

firebase.initializeApp(config)

const database = firebase.database()

export {database}