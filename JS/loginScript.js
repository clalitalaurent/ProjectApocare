function loginForm(){
    var uname = document.getElementById('username').value;
    var pw = document.getElementById('password').value;

    if(uname == ""){
        window.alert("Username harus diisi");
        uname.focus();
        return false;
    }

    if(uname.length < minuname)
    {
        window.alert("Username harus lebih dari 7 karakter")
        uname.focus();
        return false;
    }

    if(uname.includes(' ')){
        window.alert("Username tidak boleh mengandung spasi")
        uname.focus();
        return false;
    }

    if(pw == ""){
        window.alert("Password harus diisi");
        pw.focus();
        return false
    }

    if(pw.length < minpw){
        window.alert("Password length harus lebih dari 8 karakter")
        pw.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nUsername : "+uname)
    return true;

}