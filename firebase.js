import{initializeApp }from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import{getAuth,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
import{getFirestore,collection, doc, addDoc ,getDocs} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
import{getStorage, ref, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js"

    

const firebaseConfig = {
  apiKey: "AIzaSyAwojQexyWoNNGh3fy6lGnNOL01v7YGgP4",
  authDomain: "my-first-project-a46b8.firebaseapp.com",
  projectId: "my-first-project-a46b8",
  storageBucket: "my-first-project-a46b8.appspot.com",
  messagingSenderId: "488745959858",
  appId: "1:488745959858:web:9784022deed2d38e0124ab",
  measurementId: "G-9JY7CDTMQC"
  
    }
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db =getFirestore(app)
    const storage = getStorage(app)


    export{auth,
        db,
        storage,
        onAuthStateChanged ,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        collection, doc, addDoc ,getDocs,
        ref, uploadBytesResumable, getDownloadURL
    }