
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
  
    if (email == "") {
      alert("Please enter your email address");
      return false;
    }
  
    if (message == "") {
      alert("Please enter a message");
      return false;
    }
  
    return true;
     // Submit the form
  }