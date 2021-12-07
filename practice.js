const firebaseConfig = {
    apiKey: "AIzaSyDR4xiGhKFLukP-ykncWkawuAk5vDx2C3s",
    authDomain: "kwitter-d8e5a.firebaseapp.com",
    databaseURL: "https://kwitter-d8e5a-default-rtdb.firebaseio.com",
    projectId: "kwitter-d8e5a",
    storageBucket: "kwitter-d8e5a.appspot.com",
    messagingSenderId: "481608713245",
    appId: "1:481608713245:web:9348188de544949f21f2f4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}