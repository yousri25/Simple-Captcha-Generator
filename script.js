const alphanumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabetic   = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers      = "0123456789";
function generer() {
    let captcha = "";
    const n = Number(document.getElementById("num").value);
    const car = Number(document.getElementById("car").value);
    let chaine = "";
    switch (car) {
        case 1:
            chaine = alphanumeric;
            break;
        case 2:
            chaine = alphabetic;
            break;
        case 3:
            chaine = numbers;
            break;
    }
    for (let i = 0; i < n; i++) {
        let nb = Math.floor(Math.random() * chaine.length);
        captcha += chaine[nb];
    }
    document.getElementById("captcha").value = captcha;
}
function actualiser(){
    document.getElementById("captcha").value = "";
}
function verif(){
    let cap = document.getElementById("captcha").value;
    let ch = document.getElementById("verif").value;
    if(cap==ch){
        document.getElementById("result").innerHTML="Your Captcha Is Correct :)";
        document.getElementById("result").style.color = "green";
    }
    else{
        document.getElementById("result").innerHTML="Your Captcha Is Not Correct :(";
        document.getElementById("result").style.color = "red";
    }
}
