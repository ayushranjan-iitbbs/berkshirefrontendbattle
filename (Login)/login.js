let signupbutton = document.getElementById("signupbutton");
let loginbutton = document.getElementById("loginbutton");
let nameinput = document.getElementById("nameinput");
let emailinput = document.getElementById("emailinput");
let passwordinput = document.getElementById("passwordinput");
let titlepage = document.getElementById("titlepage");
let popup = document.getElementById("popup");
let closePopup = document.getElementById("closePopup");

loginbutton.onclick = function() {
    nameinput.style.maxHeight = "0";
    titlepage.innerHTML = "Investors Login";
    signupbutton.classList.add("disable");
    loginbutton.classList.remove("disable");
}

signupbutton.onclick = function() {
    if (titlepage.innerHTML === "Sign Up") {
        let name = nameinput.querySelector('input').value;
        let email = emailinput.querySelector('input').value;
        let password = passwordinput.querySelector('input').value;
        
        if (name && email && password) {
            popup.style.display = "flex";
        } else {
            alert("Please fill in all fields");
        }
    } else {
        nameinput.style.maxHeight = "60px";
        titlepage.innerHTML = "Sign Up";
        signupbutton.classList.remove("disable");
        loginbutton.classList.add("disable");
    }
}

closePopup.onclick = function() {
    popup.style.display = "none";
    nameinput.style.maxHeight = "0";
    titlepage.innerHTML = "Investors Login";
    signupbutton.classList.add("disable");
    loginbutton.classList.remove("disable");
    
    nameinput.querySelector('input').value = '';
    emailinput.querySelector('input').value = '';
    passwordinput.querySelector('input').value = '';
}
