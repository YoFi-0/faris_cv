const sleep = async (dlay) => {
    return await new Promise(r => setTimeout(() => r(true), dlay))
};

const hiedPolitudById = (id) => {
    const allAllIdes = [
        "Aboute_none",
        "discord_none",
        "strore_none",
        "Pricing_none",
        "footer_none"
    ]
    const elements = []
    for(let idString of allAllIdes){
        document.getElementById(idString).style.display = 'block'
    }
    const target = document.getElementById(id);

    target.style.display = "none";
}

// =========( ======( )====== )======== // 

window.onload = async function () {
    await landing();
    await sleep(3000);
    cana_scroll = true;
}
// End
const Home_none = document.getElementById("Home_none");
async function landing() {
    Home_none.style.display = "none"
    text_h1.style.transition = '';
    text_p.style = "transition: ``; transition-delay: ``;";
    titel.style = "transition: ``; transition-delay: ``;";
    navBullets.style = "transition: ``; transition-delay: ``;";
    landing_img.style = "transition: ``; transition-delay: ``;";
    
    landing_img.style.top = `100%`;
    navBullets.style.left = `130%`;
    await sleep(500);
    text_h1.style = "transition: ease 2s; left: 0px;";
    text_p.style = "transition: ease 2s; transition-delay: 1s; left: 0px";
    titel.style = "transition: ease 2s; bottom: 0;";
    navBullets.style = "transition: ease 2s; left: 98%;filter: blur(0px);";
    landing_img.style = "transition: ease 2s; transition-delay: 1s; top: 0%";
}
// =========( ======( )====== )======== // 


const effect = document.querySelector(`.effect`).children;
const span = document.querySelectorAll(`.effect_container .effect span`);
const width = ['200px', '300px', '400px', '200px', '300px', '400px', '400px', '300px', '200px', '400px', '300px', '200px', '400px', '300px', '200px', '400px', '300px', '200px', '400px', '300px', '200px', '400px', '300px', '200px'];
for (eff of effect) {
    let ran = Math.trunc(Math.random() * 300) + 'px';
    eff.style.width = ran;
    eff.style.height = ran;
}