function login(){
    //get the username in the text input given by the user

    username= document.getElementById("userinput").value;

    //save this username in the local storage

    localStorage.setItem("user", username);

    //navigate to next page

    window.location = "room.html"

}