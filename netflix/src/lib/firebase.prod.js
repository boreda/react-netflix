import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyCngRqSZizFoQcpVAjcEZDQNQmoh2ETSnc",
    authDomain: "react-netflix-6fdcf.firebaseapp.com",
    projectId: "react-netflix-6fdcf",
    storageBucket: "react-netflix-6fdcf.appspot.com",
    messagingSenderId: "574978389229",
    appId: "1:574978389229:web:3e9a459413285195eac8e4"
  }

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase)

export {firebase}
