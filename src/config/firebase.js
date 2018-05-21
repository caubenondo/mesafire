import firebase from 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyCpQ6UIK2xb3BlgMLGYK1Rf2LG3Elh_4cE",
    authDomain: "mesa-firebase.firebaseapp.com",
    databaseURL: "https://mesa-firebase.firebaseio.com",
    projectId: "mesa-firebase",
    storageBucket: "mesa-firebase.appspot.com",
    messagingSenderId: "95150985002"
  };
export default firebase.initializeApp(config);