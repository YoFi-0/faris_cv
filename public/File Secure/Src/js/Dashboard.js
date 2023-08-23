"use strict";
document.getElementById("cards").onmousemove = (e) => {
    for (const box of document.querySelectorAll(".box")) {
        const rect = box.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
        box.style.setProperty("--mouse-x", `${x}px`);
        box.style.setProperty("--mouse-y", `${y}px`);
    }
    ;
};





const sear = document.querySelector(".sear");
const clear = document.querySelector(".clear");
sear.onclick = function () {
    document.querySelector(".search").classList.toggle('active');
};
clear.onclick = function () {
    document.getElementById("Search").value = "";
};
const sear1 = document.querySelector(".sear1");
const clear1 = document.querySelector(".clear1");
sear1.onclick = function () {
    document.querySelector(".search1").classList.toggle('active');
};
clear1.onclick = function () {
    document.getElementById("Search1").value = "";
};