//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAdV588M1fJBK3szxIw50bmO9mnP8PWg9Q",
    authDomain: "kwitter-152ae.firebaseapp.com",
    databaseURL: "https://kwitter-152ae-default-rtdb.firebaseio.com",
    projectId: "kwitter-152ae",
    storageBucket: "kwitter-152ae.appspot.com",
    messagingSenderId: "1074930244541",
    appId: "1:1074930244541:web:bc193e198760ad5af5d0d4"
  };


  firebase.initializeApp(firebaseConfig);

  function addUser(){
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionar usuário"
    })
  }