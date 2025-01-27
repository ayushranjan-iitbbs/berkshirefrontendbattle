let signupbutton = document.getElementById("signupbutton");
let loginbutton = document.getElementById("loginbutton");
let nameinput = document.getElementById("nameinput");
let emailinput = document.getElementById("emailinput");
let passwordinput = document.getElementById("passwordinput");
let titlepage=document.getElementById("titlepage");

loginbutton.onclick=function(){
    nameinput.style.maxHeight="0";
    titlepage.innerHTML = "Investors Login";
    signupbutton.classList.add("disable");
    loginbutton.classList.remove("disable");

}
signupbutton.onclick=function(){
    nameinput.style.maxHeight="60px";
    titlepage.innerHTML = "Sign Up";
    signupbutton.classList.remove("disable");
    loginbutton.classList.add("disable");

}
  