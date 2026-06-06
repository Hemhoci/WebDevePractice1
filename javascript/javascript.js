function checkUsername() {
    let username = document.getElementById('username');
    let feedback = document.getElementById("feedback");

    if (username.value.length < 3) {
        feedback.textContent = "This username is invalid";
    }else {
        feedback.textContent = "This username is valid";
    }
}