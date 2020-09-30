function fbForm(){
    var feedback = document.getElementById('feedback').value;

    if(feedback == ""){
        window.alert("Feedback harus diisi");
        feedback.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nFeedback : "+feedback)
    return true;

}