const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPRSTUWXYZ";
const lowCase = "abcdefghijklmnoprstuwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+|`-=[]{};:'><,.?/";

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowCase[Math.floor(Math.random() * lowCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
};