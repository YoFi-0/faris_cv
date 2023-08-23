"use strict";
document.getElementById("cards").onmousemove = e => {
    for (const box of document.querySelectorAll(".box")) {
        const rect = box.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
        box.style.setProperty("--mouse-x", `${x}px`);
        box.style.setProperty("--mouse-y", `${y}px`);
    }
    ;
};
