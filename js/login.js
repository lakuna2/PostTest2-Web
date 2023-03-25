
const form = document.getElementById("form");
const user = document.getElementById("user");
const pass = document.getElementById("pass");


form.addEventListener("submit", function (e) {
    e.preventDefault()
    
    const loc_user = localStorage.getItem("Username");
    const loc_pass = localStorage.getItem("Password");

    if(user.value == loc_user && pass.value == loc_pass){
        alert("Berhasil Login")
        window.location.href = "beranda.html";
    } else {
        alert ("Email atau Password Anda Salah")
    }

});
