function checkPswd() {
    var confirmPassword = "admin";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         document.location="slavicjedi.html";
    }
    else{
        alert("Passwords do not match.");
    }
}
