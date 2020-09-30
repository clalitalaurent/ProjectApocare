function forumForm(){
    var isi = document.getElementById('isi').value;

    if(isi == ""){
        window.alert("Deskripsi harus diisi");
        isi.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nReply : "+isi)
    return true;

}