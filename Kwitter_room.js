var firebaseConfig = {
    apiKey: "AIzaSyAzbu9l8K8E5Gkg5SWEWVad5roNPzd8hkY",
    authDomain: "kwitter-3223e.firebaseapp.com",
    databaseURL: "https://kwitter-3223e-default-rtdb.firebaseio.com",
    projectId: "kwitter-3223e",
    storageBucket: "kwitter-3223e.appspot.com",
    messagingSenderId: "687115565962",
    appId: "1:687115565962:web:3eb5bd86a108c8245c6673"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom() 
{
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
        
    });
}