// nav bullets
const navBullets = document.querySelector(`.nav-bullets`);
const bullets = document.querySelectorAll(`.nav-bullets .bullet`);
const tooltips = document.querySelectorAll(`.nav-bullets .tooltip`);
// nav bullets
//  Landing Page
const text_h1 = document.querySelector(`.text-landing h1`);
const text_p = document.querySelector(`.text-landing p`);
const titel = document.querySelector(`.titel p`);
const landing_img = document.querySelector(`.landing_page img`);
//  Landing Page
// Aboute
const lefts = document.querySelectorAll(`.card1_left`);
const rights = document.querySelectorAll(`.card1_right`);
const card1_left = document.querySelectorAll(`.aboute-content .shado`);
// Aboute
// discord
const lefts_discords = document.querySelectorAll(`.box_left`);
const rights_discords = document.querySelectorAll(`.box_right`);
//
const content = document.querySelectorAll(`.content .texxt`)
const nameImges = document.querySelectorAll(`.nameImges h1`)
// discord
// strore
const card1_top = document.querySelector(`.card1_top`);
const card1_bottom = document.querySelector(`.card1_bottom`);
// strore
// Foter
const card_left = document.querySelector(`.card-left`);
const card_right = document.querySelector(`.card-right`);
const text_right = document.querySelector(`.text_right`);
const text_left = document.querySelector(`.text_left`);
// Foter

////////////!
var cana_scroll = false;
class HanterElm {
    target
    #counter = 0
    constructor(selector) {
        this.target = document.querySelector(selector);
    }
    async hanterScroll(dlay1, dlay2, func1, func2) {
        this.target.onwheel = async (e) => {
            if (this.#counter == 0 && cana_scroll) {
                this.#counter++
                cana_scroll = false
                if (String(e.wheelDeltaY).includes('-')) {
                    func1(e)
                    await sleep(dlay1)
                    cana_scroll = true
                    this.#counter = 0
                } else {
                    func2(e)
                    await sleep(dlay2)
                    cana_scroll = true
                    this.#counter = 0
                }
            }
        }
    }
};
// Start Section
// nav bullets
const navBullets_span = document.querySelectorAll(`.nav-bullets .bullet span`);
const navBullets_h6 = document.querySelectorAll(`.nav-bullets .bullet .tooltip h6`);
const tooltipH1 = document.querySelectorAll(`.nav-bullets .bullet .tooltip`);
// nav bullets

// bullets
const Aboute_none = document.getElementById("Aboute_none");
const discord_none = document.getElementById("discord_none");
const strore_none = document.getElementById("strore_none");
const Pricing_none = document.getElementById("Pricing_none");
const footer_none = document.getElementById("footer_none");
// bullets

// effect
const effect_container = new HanterElm(`.effect_container`);
const effect_children = new HanterElm(`.effect`);
// effect 
// SECTIONS
const nav_bullets = new HanterElm('.nav-bullets');
const landing_page = new HanterElm('.landing_page');
const aboute = new HanterElm('.aboute');
const discord = new HanterElm('.discord');
const strore = new HanterElm('.strore');
const Pricing = new HanterElm('.Pricing');
const footer = new HanterElm('.footer');
// SECTIONS
// End Section
////////////!
landing_page.hanterScroll(4500, 3500, async () => {
    discord.target.style.display = `none`;
    strore.target.style.display = `none`;
    footer.target.style.display = `none`;

    nav_bullets.style = "opacity: 0;filter: blur(10px);"
    text_h1.style.left = '-100%';
    text_p.style.left = `-130%`;
    titel.style.bottom = `-428%`;
    navBullets.style.left = `130%`;
    landing_img.style.top = `100%`;
    await sleep(2000);
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `block`;

    
    nav_bullets.target.style = "filter: blur(0px);transition: .3s;position: absolute;gap: 25px;background-color: rgba(24, 21, 55, 0.44);backdrop-filter: blur(12px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(2vw, 2em) max(-1.6vw, -1.6em) #00000075;display: flex;left: 50%;flex-flow: column wrap;place-content: center space-between;transform: translate(-50%, -50%);align-items: center;z-index: 1;"
    for (let h6 of navBullets_h6) {
        h6.style = "height: 0;width: 0;right: 0;border-style: solid;border-width: 0;border-radius: 0;top: 0;transform: translateY(0%);border-color: transparent transparent transparent transparent;";
    }
    for (let span of navBullets_span) {
        span.style = "left: 0;transform: translate(0px, 0px);top: 0;width: 0;height: 0;background-color: transparent;border-radius: 0;";
    }
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let tooltip of tooltips) {
        tooltip.style = "display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0;"
    }
    hiedPolitudById("Aboute_none");

    await sleep(300);
    for (let left of lefts) {
        left.style = "transition: ease 2s; left: 0";
        await sleep(600);
    }
    for (let right of rights) {
        await sleep(100);
        right.style = "transition: ease 2s; right: 0";
    }
    await sleep(1000)
}, async () => { //! async //

    aboute.target.style.display = `none`;
    discord.target.style.display = `none`;
    strore.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;
    landing_page.target.style.display = `block`;
    await sleep(3000);
})
////////////!
aboute.hanterScroll(4500, 4500, async () => {
    landing_page.target.style.display = `none`;
    strore.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;

    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6C63FF;"
    }

    effect_children.target.style = "transition: ease 2s; transform: rotate(227deg); opacity: 1;";
    await sleep(500);
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#6C63FF`;
        effect_c.style.boxShadow = "0 0 0 0px rgb(11 11 11 / 0%), inset 0 0 20px 0px #000000, inset 0 0 77px 0px #000000";
    }
    for (let card1_lefts of card1_left) {
        card1_lefts.style = "color: #6C63FF; transition: ease 2s;";
    }
    for (let left of lefts) {
        left.style = "left: -40%; transition: ease 2s;";
        await sleep(500);
    }
    for (let right of rights) {
        right.style = "right: -40%; transition: ease 2s;";
    }
    await sleep(1500)
    hiedPolitudById("discord_none");
    aboute.target.style.display = `none`;
    discord.target.style.display = `grid`;
    //

    for (let nameImgess of nameImges) {
        nameImgess.style = "transition: ease 2s; color: #6C63FF;";
    }
    // 
    await sleep(200);
    for (let left_discord of lefts_discords) {
        left_discord.style = "transition: ease 3s; left: 0;";
    }
    await sleep(700);
    for (let right_discord of rights_discords) {
        right_discord.style = "transition: ease 3s; right: 0;";
    }
    // 

}, async () => { //! async //
    discord.target.style.display = `none`;
    strore.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;

    for (let left of lefts) {
        left.style = "left: -40%; transition: ease 2s;";
        await sleep(500);
    }
    for (let right of rights) {
        right.style = "right: -40%; transition: ease 2s;";
    }

    await sleep(1000);
    landing_page.target.style.display = `block`;
    nav_bullets.target.style = "filter: blur(0px);position: absolute;left: 130%;top: 50%;transform: translate(-50%, -50%);z-index: 1;"
    for (let h6 of navBullets_h6) {
        h6.style = "position: absolute;height: 0;width: 0;right: max(-1.5vw, -1.5em);z-index: 10;border-style: solid;border-width: max(0.5vw, 0.5em);border-radius: max(1vw, 2em);top: 50%;transform: translateY(-50%);border-color: transparent transparent transparent #6C63FF;";
    }
    for (let span of navBullets_span) {
        span.style = "position: absolute;left: 50%;transform: translate(-50%, -50%);top: 50%;width: max(1vw, 1em);height: max(1vw, 1em);background-color: #6C63FF;border-radius: 50%;z-index: 1;";
    }
    for (let bullet of bullets) {
        bullet.style = "position: relative;border-radius: 50%;width: max(2vw, 2em);height: max(2vw, 2em);background-color: transparent;border: max(0.2vw, 0.2em) solid white;margin: max(1vw, 1em) max(1vw, 1em) max(1vw, 1em) max(1vw, 1em);cursor: pointer;"
        
    }
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;background-color: #6C63FF;width: max(7vw, 7em);color: white; padding: max(0.5vw, 0.5em) max(1vw, 1em);position: absolute;right: max(3vw, 3em);font-size: max(1vw, 1em);top: max(-0.2vw, -0.2em);text-align: center;cursor: default;pointer-events: none;border-radius: max(0.2vw, 0.2em);display: none;"
    }
    await landing();
    await sleep(2000);
    discord.target.style.display = `grid`;
})
////////////!
discord.hanterScroll(4000, 2500, async () => {
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;

    for (let left_discord of lefts_discords) {
        left_discord.style = "transition: ease 2s; left: -40%";
        await sleep(500);
    }
    for (let right_discord of rights_discords) {
        right_discord.style = "transition: ease 2s; right: -40%";
        await sleep(500);
    }
    await sleep(1500);
    discord.target.style.display = `none`;
    strore.target.style.display = `block`;
    //
    nav_bullets.target.style = "filter: blur(0px);position: absolute;background-color: rgba(24, 21, 55, 0.4);backdrop-filter: blur(30px);padding: max(1vw, 1em);box-shadow: black 0px 0px 16px -3px;display: flex;left: 50%;width: 90%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -50%);transition: all 1.3s ease 0s;";
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 1s;display: block;color: #ECB365;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6C63FF;"
    }
    hiedPolitudById("strore_none");

    //
    await sleep(700)
    card1_top.style = "transition: ease 2s; left: 0;";
    await sleep(500)
    card1_bottom.style = "transition: ease 2s; right: 0;";
    //
}, async () => { //! async //

    landing_page.target.style.display = `none`;
    strore.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;

    for (let left_discord of lefts_discords) {
        left_discord.style = "transition: ease 2s; left: -40%;";
        await sleep(500)
    }
    for (let right_discord of rights_discords) {
        right_discord.style = "transition: ease 2s; right: -40%;";
    }
    await sleep(1500)
    discord.target.style.display = `none`;

    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #ecb365;"
    }
    
    effect_children.target.style = "transition: ease 2s; transform: rotate(137deg); opacity: 1;";
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#ECB365`;
        effect_c.style.boxShadow = "0 0 0 10px rgb(11 11 11 / 27%), inset 0 0 8px #000000, 0 0 100px #ecb365";
    }
    hiedPolitudById("Aboute_none");
    
    for (let card1_lefts of card1_left) {
        card1_lefts.style = "transition: ease 2s; color: #ECB365";
    }
    aboute.target.style.display = `block`;
    
    await sleep(500)
    for (let left of lefts) {
        left.style = "transition: ease 2s; left: 0;";
        await sleep(500)
    }
    for (let right of rights) {
        right.style = "transition: ease 2s; right: 0;";
        await sleep(500)
    }
})
////////////!
strore.hanterScroll(4000, 6500, async () => {
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    discord.target.style.display = `none`;
    footer.target.style.display = `none`;

    card1_top.style = "transition: ease 2s; left: 125%;";
    await sleep(500);
    card1_bottom.style = "transition: ease 2s; right: 125%;";
    await sleep(2000);
    strore.target.style.display = `none`;

    nav_bullets.target.style = "filter: blur(0px);position: absolute;background-color: rgb(0, 206, 121);backdrop-filter: blur(30px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(3vw, 3em) max(-0.3vw, -0.3em) black;display: flex;left: 50%;top: 26%;width: 84%;border-radius:max(0.8vw, 0.8em) max(0.8vw, 0.8em) max(0vw, 0em) max(0vw, 0em);flex-flow: row wrap;align-content: center;transform: translate(-50%, -100%);transition: all 1.3s ease 0s;";
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: black;"
    }
    hiedPolitudById("Pricing_none");

    effect_container.target.style = " z-index: 1;";
    await sleep(500);
    effect_children.target.style = "transition: ease 2s; transform: rotate(141deg); opacity: 1;";
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#212121`;
        effect_c.style.boxShadow = `#00ce79 0px 0px 0px 0px, #00ce79 0px 0px 0px 0px inset, #00ce79 0px 0px 41px 0px inset`;
        effect_c.style.transition = `ease 2s`;
    }
    await sleep(500);
    Pricing.target.style.display = `block`;
}, async () => { //! async //
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    Pricing.target.style.display = `none`;
    footer.target.style.display = `none`;

    card1_top.style = "transition: ease 2s; left: 125%";
    await sleep(500);
    card1_bottom.style = "transition: ease 2s; right: 125%";
    await sleep(2000);
    strore.target.style.display = `none`;
    // 
    await sleep(1000);
    //
    nav_bullets.target.style = "filter: blur(0px);position: absolute;height: 75vh; background-color: #18153770;backdrop-filter: blur(12px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(1vw, 1em) max(-1.6vw, -1.6em);display: flex;left: 50%;flex-flow: column wrap;place-content: center space-between;transform: translate(-50%, -50%);align-items: center;z-index: 1;";
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease .3s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6C63FF;"
    }
    hiedPolitudById("discord_none");

    effect_children.target.style = "transition: ease 2s; transform: rotate(227deg); opacity: 1;";
    await sleep(500);
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#6C63FF`;
        effect_c.style.boxShadow = "0 0 0 0px rgb(11 11 11 / 0%), inset 0 0 20px 0px #000000, inset 0 0 77px 0px #000000";
    }
    //
    discord.target.style.display = `grid`;
    for (let contents of content) {
        contents.style = "transition: ease 2s; color: #6C63FF";
    }
    for (let nameImgess of nameImges) {
        nameImgess.style = "transition: ease 2s; color: #6C63FF";
    }
    //
    await sleep(100);
    for (let left_discord of lefts_discords) {
        left_discord.style = "transition: ease 2s; left: 0%;";
        await sleep(500);
    }
    for (let right_discord of rights_discords) {
        right_discord.style = "transition: ease 2s; right: 0%;";
    }
    await sleep(1000);
})
////////////!
Pricing.hanterScroll(2500, 3000, async () => {
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    discord.target.style.display = `none`;
    strore.target.style.display = `none`;
    //____________________________________\\
    effect_container.target.style = " z-index: 0;";
    nav_bullets.target.style = "filter: blur(0px);position: absolute;background-color: rgb(33 33 33 / 48%); backdrop-filter: blur(40px);padding: max(1.2vw, 1.2em); border-radius: max(0.3vw, 0.3em); box-shadow: max(0vw, 0em) max(0vw, 0em) max(1.2vw, 1.2em) max(-4vw, -4em) #00ce79;display: flex;gap: 5px;left: 50%; width: 80%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -50%);transition: all 1.3s ease 0s;z-index: 7;";
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: white;"
    }
    
    hiedPolitudById("footer_none");
    Pricing.target.style.display = `none`;
    await sleep(500);
    effect_children.target.style = "transition: ease 2s; transform: rotate(141deg); opacity: 1;";
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#212121`;
        effect_c.style.boxShadow = `#00ce79 0px 0px 0px 0px, #00ce79 0px 0px 0px 0px inset, #00ce79 0px 0px 41px 0px inset`;
    }
    footer.target.style.display = `block`;
    await sleep(100);
    card_left.style = "transition: ease 2s; right: max(0vw, 0em)";
    await sleep(1000);
    card_right.style = "transition: ease 2s; left: max(0vw, 0em)";
    // ========------------========= \\
    await sleep(100);
    text_left.style = "transition: ease 2s; right: 0";
    await sleep(1000);
    text_right.style = "transition: ease 2s; left: 0";

}, async () => {
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    discord.target.style.display = `none`;
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6c63ff;"
    }
    
    effect_container.target.style = " z-index: 0;";
    effect_children.target.style = "transition: ease 2s; transform: rotate(227deg); opacity: 1;";
    await sleep(500);
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#6C63FF`;
        effect_c.style.boxShadow = "0 0 0 0px rgb(11 11 11 / 0%), inset 0 0 20px 0px #000000, inset 0 0 77px 0px #000000";
    }
    nav_bullets.target.style = "filter: blur(0px);position: absolute; background-color: rgba(24, 21, 55, 0.4);backdrop-filter: blur(30px);padding: max(1.4vw, 1.4em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(1vw, 1em) max(-2vw, -2em) black;display: flex;gap: 75px;left: 50%;width: 80%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -50%);transition: all 1.3s ease 0s;";
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let contents of content) {
        contents.style = "transition: ease 2s; color: #6C63FF;";
    }
    for (let nameImgess of nameImges) {
        nameImgess.style = "transition: ease 2s; color: #6C63FF";
    }
    hiedPolitudById("strore_none");
    strore.target.style.display = `block`;
    await sleep(500)
    card1_top.style = "transition: ease 2s; left: 0%";
    await sleep(500)
    card1_bottom.style = "transition: ease 2s; right: 0%";
})
////////////!
footer.hanterScroll(0, 4500, async () => {
    footer.target.style.display = `block`;
    footer.target.style.display = `block`;
}, async () => {
    landing_page.target.style.display = `none`;
    aboute.target.style.display = `none`;
    strore.target.style.display = `none`;
    discord.target.style.display = `none`;

    await sleep(500)
    card_left.style = "transition: ease 2s;right: max(-89vw, -107em);";
    await sleep(500)
    card_right.style = "transition: ease 2s;left: max(-89vw, -107em)";

    await sleep(500)
    text_left.style = "transition: ease 2s;right: -100%;";
    await sleep(500)
    text_right.style = "transition: ease 2s;left: -100%;";

    await sleep(1000)
    footer.target.style.display = `none`;

    Pricing.target.style.display = `block`;
    nav_bullets.target.style = "filter: blur(0px);position: absolute;background-color: rgb(0, 206, 121);backdrop-filter: blur(30px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(3vw, 3em) max(-0.3vw, -0.3em) black;display: flex;gap: max(1vw, 1em);left: 50%;top: 26%;width: 80%;border-radius:max(0.8vw, 0.8em) max(0.8vw, 0.8em) max(0vw, 0em) max(0vw, 0em);flex-flow: row wrap;align-content: center;transform: translate(-50%, -100%);transition: all 1.3s ease 0s;";
    for (let bullet of bullets) {
        bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
    }
    for (let tooltip of tooltips) {
        tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: black;"
    }
    hiedPolitudById("Pricing_none");

    effect_container.target.style = " z-index: 1;";
    effect_children.target.style = "transition: ease 2s; transform: rotate(141deg); opacity: 1;";
    for (let effect_c of span) {
        effect_c.style.backgroundColor = `#212121`;
        effect_c.style.boxShadow = `#00ce79 0px 0px 0px 0px, #00ce79 0px 0px 0px 0px inset, #00ce79 0px 0px 41px 0px inset`;
    }
})
//////////!