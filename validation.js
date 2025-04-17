function signup() {
    window.location.href ="signup.html";
}
function login(event){
    event.preventDefault();
    const username =document.getElementById("username").value;
    const password =document.getElementById("password").value;
    if(username === "nidhun" && password === "12345678") {
        alert("login successfull");
        window.location.href = "signup.html";
    }else{
        alert("login failed");
        window.location.href = "index.html";
    }
}