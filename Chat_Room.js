
var firebaseConfig = {
      apiKey: "AIzaSyAVj4ujMH68KmpI5_wI_aTUEBE0G3MjsGo",
      authDomain: "internet-chat-75f0f.firebaseapp.com",
      databaseURL: "https://internet-chat-75f0f-default-rtdb.firebaseio.com",
      projectId: "internet-chat-75f0f",
      storageBucket: "internet-chat-75f0f.appspot.com",
      messagingSenderId: "182357631701",
      appId: "1:182357631701:web:bc79c8130f54e9232d785c",
      measurementId: "G-RF8E8MT8LE"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom(){
      Room_name = document.getElementById("Room_name").value;
      window.location = "chat_page.html";
      User_name = localStorage.getItem("User_namee");
}