// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1oCF1aGj33H-6ivOOfcWD5eF2DBY3BF8",
    authDomain: "learningcurve-11efe.firebaseapp.com",
    databaseURL: "https://learningcurve-11efe.firebaseio.com",
    projectId: "learningcurve-11efe",
    storageBucket: "learningcurve-11efe.appspot.com",
    messagingSenderId: "655129108698"
  };
  firebase.initializeApp(config);
  //check email Adress
  function checkEmail(el) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(el.value)) {
         return false;
    }else{
       return true;
    }
  }
  // create  signupUser
  const sinUpUser = (()=>{
  const name = document.getElementById('modalnom').value;
  const email = document.getElementById('modalemail').value; 
  const password = document.getElementById('modalpass').value;
  const output = document.getElementById('output');
  const signup = document.getElementById('signup');

  if(name =="" && email =="" && password ==""){
    output.className="tex-center bg-danger p-2 text-white";
    output.innerHTML="Remplissez le champ s'il vous plait";
  }else if(checkEmail(email) === false){
    output.className="tex-center bg-danger p-2 text-white";
    output.innerHTML="le email address n'est pas valid ";
  }else{
   firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user=>{
   if(user){ 
     const buttonOutput = document.getElementById('buttonOutput');
     const button = document.createElement('button');
     button.className ="btn btn-success";
     button.innerHTML = "Connexion";
     button.title="Connexion";
     output.className="tex-center bg-success p-2 text-white";
     output.innerHTML='votre compte a été créé, vous pouvez vous connecter maintenant';
     output.append(button);
     buttonOutput.append(button);
     
    }}).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      output.className="tex-center bg-danger p-2 text-white";
      output.innerHTML= errorMessage;
       // ...
    });
  }
});


 // SignIn User 
 const sinInUser = (()=>{
   const email = document.getElementById('signIn-email').value; 
  const password = document.getElementById('signIn-password').value;
  const outputSignIn = document.getElementById('outputSignIn');  
  if(email =="" && password ==""){
    outputSignIn.className="tex-center bg-danger p-2 text-white";
    outputSignIn.innerHTML="Remplissez le champ s'il vous plait ";
    }else if(checkEmail(email) === false){
    outputSignIn.className="tex-center bg-danger p-2 text-white";
    outputSignIn.innerHTML="le email address n'est pas valid ";
  }else{
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(user=>{
         if(user){

         }
       }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        output.className="tex-center bg-danger p-2 text-white";
        output.innerHTML= errorMessage;
         // ...
      });
      }
    });





   


   
