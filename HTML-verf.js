console.log("Connected...");

// Captcha-Site-Verification HTML
const captchaBox = document.querySelector(".input-field-and-box");
const refreshBtn = document.querySelector(".refresh.captcha");
const fieldText = document.querySelector(".field-text-and-captcha-input");
const correctMsg = document.querySelector(".user-input-text");
const subBtn = document.querySelector(".input-field-button");

let captchaText = null;

const captchaRandom = () => {
    const stringRandom = Math.random().toString(36).substring(2, 7);
    console.log(stringRandom);
}

captchaRandom();