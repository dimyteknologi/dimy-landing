import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

  const config = {
    apiKey: "AIzaSyCL29ZZC2LHOtjsnRndF7y2eZgrA7_fXjg",
    authDomain: "qoligo-landing.firebaseapp.com",
    databaseURL: "https://qoligo-landing.firebaseio.com",
    projectId: "qoligo-landing",
    storageBucket: "qoligo-landing.appspot.com",
    messagingSenderId: "1054333754119",
    appId: "1:1054333754119:web:b185814c1a7aa2eaa283a2"
  }

  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})

}

const fireDb = firebase.firestore()

export {fireDb}