
//ADD YOUR FIREBASE LINKS HERE

// Web app's Firebase configuration
const firebaseConfig = { apiKey: "AIzaSyBZy9y_oeD559_PcRq_hN5qCq_4n6wqtOg", authDomain: "kwitter-d3d4c.firebaseapp.com", databaseURL: "https://kwitter-d3d4c-default-rtdb.firebaseio.com", projectId: "kwitter-d3d4c", storageBucket: "kwitter-d3d4c.appspot.com", messagingSenderId: "142758905", appId: "1:142758905:web:60c058718f943dd725a328" }; // Initialize Firebase const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

var username=localStorage.getItem('user')
document.getElementById('welcomeuser').innerHTML="Welcome    "+ username + "!"

function addroom()
{
      var room_name = document.getElementById("roominput").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
