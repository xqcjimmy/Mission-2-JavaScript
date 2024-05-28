console.log("Connected...");

// for loop
const gamer = ["You are never too old to enjoy gaming!"];
for (const game of gamer) {
    console.log(`Welcome to my website, if there is one thing you take away from this. Remember that: ${game}`);
};

// Captcha-Site-Verification HTML
const captchaBox = document.querySelector('.box-input input');
const refreshBtn = document.querySelector('.refresh_captcha');
const fieldText = document.querySelector('.captcha-input input');
const correctMsg = document.querySelector('.user-message');
const subBtn = document.querySelector('.input-fieldB button');

let captchaText = null;

// random Captcha generator
const captchaRandom = () => {
    const stringRandom = Math.random().toString(36).substring(2, 8);
    const stringRandomArray = stringRandom.split("");
    const changeString = stringRandomArray.map ((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join ("     ");
    captchaBox.value = captchaText;
    console.log(`User(s) On-Screen Captcha is: [${stringRandomArray, changeString}] ↻`);
};

// addEventListener on refresh button

const refreshBtnClick = () => {
    captchaRandom();
    fieldText.value = "";
    captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
    subBtn.classList.toggle("disabled", !fieldText.value);
    if (!fieldText.value) correctMsg.classList.remove("active")};

const subBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
    correctMsg.classList.add("active");

if (fieldText.value === captchaText) {
    correctMsg.innerHTML = "Captcha is correct!";
    correctMsg.style.color = "#5ee25e"
    console.log(`User has entered correct Captcha: ${fieldText.value}`);
} else {
    correctMsg.innerHTML = "Captcha is incorrect!";
    correctMsg.style.color = "#ff0000";
    console.log(`User has entered incorrect Captcha: ${fieldText.value}`);
}};

refreshBtn.addEventListener("click", refreshBtnClick);
fieldText.addEventListener("keyup", captchaKeyUpValidate);  
subBtn.addEventListener("click", subBtnClick);

captchaRandom ();

// if tick box is pressed

function myFunction() {
    let checkText = document.querySelector(".checktext");
    let checkText1 = document.querySelector(".checktext1");
    if (checkText.checked == true){
        checkText1.style.display = "inline";
    } else {
        checkText1.style.display = "none";
    }
    console.log(`check box is ${checkText.checked}`);
};

// Replacing HTML using JavaScript

const sub1 = document.getElementById('sub-btn1');
sub1.textContent = "Submit 🤖";
sub1.style.fontSize = "large";

document.querySelector('.captcha-input').style.borderColor = "blue";

// JQuery example & function

jQuery(document).ready(function($){
    $(fieldText).removeAttr('placeholder');
    $(fieldText).attr("placeholder" , "Enter On-Screen Captcha");
});