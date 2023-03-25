const daftar = document.getElementById("daftar");
daftar.onclick = regis;

function regis(e){
    e.preventDefault();
    
    const nama = document.getElementById("Username");
    const email = document.getElementById("Email");
    const password = document.getElementById("Password");
    
    localStorage.setItem("Username", nama.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);

    alert("Berhasil Daftar");
}
