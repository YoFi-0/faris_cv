const sleep = async (dlay) => {
    return await new Promise(r => setTimeout(() => r(true), dlay))
}




//!

let Icon = document.querySelector(".toggle-settings .settin")
let opens = document.querySelector(".selct_box")
let leftt = document.querySelector(".leftt")
let com = document.querySelector(".com")

let left = true;
let comaa = true;

Icon.onclick = async () => {
    Icon.classList.toggle("fa-spin");
    document.querySelector(".selct_box").classList.toggle("clos");
    opens.style = "transition: ease .7s;"

    if (left) {
        left = false;
        leftt.style = "transition: .7s;left: max(-31vw, -30em);position: relative;"
    } else {
        left = true;
        leftt.style = "transition: .7s;left: 0px;position: relative;"
    };
    if (comaa) {
        comaa = false;
        com.style = "width: max(100vw, 100em);transition: ease .7s;"
    } else {
        comaa = true;
        com.style = "width: max(75vw, 75em);transition: ease .7s;"
    };
};


// ===================

let new_Script = document.querySelector(".albutton #new-script");
let card_new = document.querySelector(".card_new");
let Icon_d = document.querySelector(".Icon_d i");



new_Script.onclick =  async () => {

    card_new.style = "transition: all 0.6s ease 0s;opacity: 0;"
    await sleep(100);
    card_new.style = "opacity: 1;transition: all 0.6s ease 0s;display: block;"


    if (card_new !== "block") {
        Icon_d.onclick = () => {
            card_new.style.display = "none";
        }
    }
}


let yesOrNo = document.querySelectorAll("#yesOrNo");
let card_Delete = document.querySelector(".card_Delete");
let no_Poppap = document.querySelector("#no_Poppap");
const del = document.getElementById("delete")
yesOrNo.forEach(element => {

    element.onclick =  async () =>  {
        card_Delete.style = "transition: all 0.6s ease 0s;opacity: 0;"
        await sleep(100);
        card_Delete.style = "opacity: 1;transition: all 0.6s ease 0s;display: block;"
        del.innerHTML = element.value
        if (card_Delete !== "block") {
            no_Poppap.onclick = () => {
                card_Delete.style.display = "none";
            }
        }
    }
});





