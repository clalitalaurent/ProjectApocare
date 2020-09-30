function ratingForm(){
    // var rating = document.forms["formRating"]["rating"];
    // var minrating = 1;
    // var maxrating = 5;
    var alasan = document.getElementById('alasan').value;

    if(alasan == ""){
        window.alert("Alasan harus diisi");
        alasan.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nAlasan : "+alasan)
    return true;
}