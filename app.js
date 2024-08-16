import {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from './firebase.js';

//  check user is exist or not
onAuthStateChanged(auth, (user) => {
  if (!user) {
   Swal.fire("create acc first")
  }
});



// Sign Up work
  let signUp = () => {
     let email = document.getElementById('email')
     let password = document.getElementById('psw')
     let name = document.getElementById('name')
     let userName= document.getElementById('userName')
     
     var userSignUp ={
       email:email.value,
       password : password.value,
       name: name.value ,
       userName : userName.value
     }
     createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
   .then((res) => {
     
     const user = res.user;
     console.log(user)
     window.location.href="signIn.html"
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
   
     console.log("error message =>",errorMessage)

   });
   
  }



  let signUp_btn=document.getElementById('signUp_btn')

    // Attach event listener to SignUp button
if(signUp_btn){
signUp_btn.addEventListener('click',signUp)
}


// Sign IN work

let signIn = () => {
  let email = document.getElementById('email')
  let password = document.getElementById('psw')

  
  var userSignIn ={
    email:email.value,
    password : password.value,

  }

  if (userSignIn.email=="admin@gmail.com" && userSignIn.password == "admin123"){
    window.location.href ="../admin.html"
  }
  else{
    signInWithEmailAndPassword(auth, userSignIn.email, userSignIn.password)
  .then((CheckuserData) => {
    const user = CheckuserData.user;
     window.location.href="../user.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error Message", errorMessage)
  });

  }
}
let signIn_btn = document.getElementById('signIn_btn')
  
// Attach event listener to SignIn button
if(signIn_btn){
  signIn_btn.addEventListener('click',signIn)
  }

// logOut Work

  let logOut = () => {
    signOut(auth)
      .then(() => {
        // Redirect on successful sign out
        window.location.href = 'index.html';
      })
      .catch((error) => {
        // Handle sign out error
        console.error('Sign out error:', error);
        Swal.fire("Error", "An error occurred during sign out", "error");
      });
  }
  
  // Attach event listener to logout button
  let logOut_btn = document.getElementById('logOut_btn');
  if (logOut_btn) {
    logOut_btn.addEventListener('click', logOut);
  }