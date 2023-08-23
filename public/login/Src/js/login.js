
// Regular expressions
let password_1 = document.getElementById("password_1");
let password_2 = document.getElementById("password_2");
let password_3 = document.getElementById("password_3");
let password_4 = document.getElementById("password_4");
let passwordlength_5 = document.getElementById("password_5");
let Mathe = document.getElementById("Mathe");

let Mathe_1 = document.getElementById("Mathe_1");
let Mathe_2 = document.getElementById("Mathe_2");

function checkPassword(data) {
    // varibols 
    const passwordReg1 = /(?=.[A-Z].[A-Z])/;
    const passwordReg2 = /(?=.[!@#$&])/;
    const passwordReg3 = /(?=.[0-9].[0-9])/;
    const passwordReg4 = /(?=.[a-z].[a-z].*[a-z])/;
    const passwordlength = data.length <= 30 && data.length >= 8;
    // =_______-------------________=
    const passwordReg = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,30}$/
    // =_____________________________=
    if (passwordReg1.test(data)) {
        password_1.classList.add('valid');
    } else {
        password_1.classList.remove('valid');
    }
    if (passwordReg2.test(data)) {
        password_2.classList.add('valid');
    } else {
        password_2.classList.remove('valid');
    }
    if (passwordReg3.test(data)) {
        password_3.classList.add('valid');
    } else {
        password_3.classList.remove('valid');
    }
    if (passwordReg4.test(data)) {
        password_4.classList.add('valid');
    } else {
        password_4.classList.remove('valid');
    }
    if (passwordlength) {
        passwordlength_5.classList.add('valid');
    } else {
        passwordlength_5.classList.remove('valid');
    }

    MathePassword()
}
function MathePassword() {
    if (Mathe_1.value.length > 0 && Mathe_2.value.length > 0) {

        if (Mathe_1.value == Mathe_2.value) {
            Mathe.classList.add('valid');
    
        } else {
            Mathe.classList.remove('valid');
        }
    } else {
        Mathe.classList.remove('valid');
    }
}
// Regular expressions


// Login with your account
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#passwordActiv");
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the icon
    let hehe = true;
    if (hehe) {
        hehe = false;
        this.classList.toggle("fa-eye");
        this.classList.toggle('fa-eye-slash')
    }
});
// Login with your account


// createAccount with your account
const pswrd = document.getElementById("Mathe_1");
const toggleBtn = document.getElementById("toggl");
toggleBtn.onclick = function(){
    if (pswrd.type === 'password') {
        pswrd.setAttribute("type", 'text');
        toggl.classList.add('hide')
    } else {
        pswrd.setAttribute("type", 'password');
        toggl.classList.remove('hide')
    }
};
// createAccount with your account


//-=========-======-======
let createA = document.querySelector(`#create`);
let createAccount = document.querySelector(`.createAccount`);
createA.onclick = function () {
    createAccount.style.transition = `all 0.3s cubic-bezier(0, 0.01, 1, 0.57) 0s`;
    createAccount.style.borderRadius = `max(0.4vw, 0.4em) max(0.4vw, 0.4em) max(0.4vw, 0.4em) max(0.4vw, 0.4em)`;
    createAccount.style.left = `0%`
    createAccount.style.cursor = `context-menu`
}
let log = document.querySelector(`#log`);
log.onclick = () => {
    createAccount.style.borderRadius = ``;
    createAccount.style.left = ``
    createAccount.style.cursor = ``
}
//-=========-======-======
