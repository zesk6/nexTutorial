import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAtk87eSgCKCEE0ClXVKwOdK6KFHtXBppA",
  authDomain: "reacttutorail.firebaseapp.com",
  projectId: "reacttutorail",
  storageBucket: "reacttutorail.appspot.com",
  messagingSenderId: "1086336429643",
  appId: "1:1086336429643:web:66b2744f57befe59dbe7ce",
  measurementId: "G-L5SYKM6N1H"
};


export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

