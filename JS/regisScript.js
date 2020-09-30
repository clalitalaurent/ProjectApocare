function regisForm(){

    var nama = document.getElementById('nama').value;
    var letters = /^[a-zA-Z ]+$/;
    var uname = document.getElementById('username').value;
    var minuname = 7;
    var pw = document.getElementById('password').value;
    var minpw = 8;
    var gender = document.getElementsByName('gender');
    var genderValue = false;
    var dob = document.getElementById('dob').value;
    var dobreg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    var email = document.getElementById('email').value;

    if (nama == ""){
        window.alert("Nama harus diisi");
        nama.focus();
        return false;
    }

    if(!nama.match(letters)){
        window.alert("Nama hanya boleh mengandung alphabet");
        nama.focus();
        return false;
    }

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
        return false;
    }

    if(pw.length < minpw){
        window.alert("Password length harus lebih dari 8 karakter")
        pw.focus();
        return false;
    }

    for (var i=0; i<gender.length;i++){
        if(gender[i].checked == true){
            genderValue = true;
        }
    }

    if(!genderValue){
        window.alert("Gender harus dipilih");
        return false;
    }

    if(dob == ""){
        window.alert("Tanggal lahir harus diisi");
        dob.focus();
        return false;
    }

    if(!dob.match(dobreg)){
        window.alert("Format tanggal lahir harus dd/mm/yyyy");
        dob.focus();
        return false;
    }
    
    if(email == ""){
        window.alert("Email harus diisi");
        email.focus();
        return false;
    }

    if(!email.includes('@') || !email.value.includes('.')){
        window.alert("Email harus mengandung @ dan .")
        email.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nNama : "+nama+"\nTanggal Lahir : "+dob
                    +"\nGender : "+gender+"\nUsername : "+uname+"\nEmail : "+email)
    return true;
    
}