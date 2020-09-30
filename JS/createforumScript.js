function forumForm(){
    var subject = document.getElementById('subject').value;
    var isi = document.getElementById('isi').value;

    if(subject == ""){
        window.alert("Subject harus diisi");
        subject.focus();
        return false;
    }

    if(isi == ""){
        window.alert("Deskripsi harus diisi");
        isi.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nSubject : "+subject+"\nDeskripsi : "+isi)
    return true;

}