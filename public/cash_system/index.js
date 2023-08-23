
const sleep = async (dlay) => {
    return await new Promise(r => setTimeout(() => r(true), dlay))
};


const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'files';
    }, 0);
    setTimeout(() => {
        text.textContent = 'attachments';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'extensions';
    }, 8000);
    setTimeout(() => {
        text.textContent = 'scripts';
    }, 12000);
    setTimeout(() => {
        text.textContent = 'websites';
    }, 16000);
    setTimeout(() => {
        text.textContent = 'apps';
    }, 20000);
    setTimeout(() => {
        text.textContent = 'images';
    }, 24000);
    setTimeout(() => {
        text.textContent = 'videos';
    }, 28000);
    setTimeout(() => {
        text.textContent = 'designs';
    }, 32000);
}
textLoad();
setInterval(textLoad, 32000);


const opa = document.querySelector(".first-text")
const colo = document.querySelector(".colo")
const sec_text = document.querySelector(".sec-text")
const ditels = document.querySelector(".ditels")
const abuo = document.querySelector(".abuo")

window.onload = async function () {
    await sleep(50);
    opa.style = ' opacity: 1';
    await sleep(500);
    colo.style = ' opacity: 1'
    await sleep(500);
    sec_text.style = ' opacity: 1'
    colo.style = ' opacity: 1'
    await sleep(100);
    ditels.style = 'top: 0; opacity: 1'
    await sleep(100);
    abuo.style = 'top: 0; opacity: 1'
}
