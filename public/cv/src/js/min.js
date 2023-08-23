

const sho = document.querySelector(".show");
const over = document.querySelector(".popup-overlay");
const skills = document.querySelector(".skl");

const htm = document.querySelector(".skl .html");
const quality = document.querySelector(".box-quality");

const java = document.querySelector(".skl .js");
const css = document.querySelector(".skl .css");

sho.onclick = () => {
    over.style.display = "block";
    skills.style.display = "flex";
};
