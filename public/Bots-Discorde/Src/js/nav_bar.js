//$/
let bullet = document.querySelectorAll(`.nav-bullets .bullet`);
var tru = true;
let turn = 0;
const rest = async () => {
    text_h1.style.transition = ``;
    text_p.style = "transition: ``; transition-delay: ``;";
    titel.style = "transition: ``; transition-delay: ``;";
    navBullets.style = "transition-delay: ``;";
    landing_img.style = "transition: ``; transition-delay: ``;";
    // "   "
    navBullets.style = "transition-delay: ``";
    text_h1.style = "transition: ease 2s; left: -100;";
    text_p.style = "transition: ease 2s; transition-delay: 1s; left: -130%";
    titel.style = "transition: ease 2s; transition-delay: 1s; bottom: -428%;";
    landing_img.style = "transition: ease 2s; transition-delay: 1s; top: 100%";
    await sleep(500);
}
//!!
bullet[0].onclick = async () => {
    rest();
    if (!tru) {
        await sleep(500);
    }
    tru = false;
    if (turn != 1) {
        aboute.target.style.display = `none`;
        discord.target.style.display = `none`;
        strore.target.style.display = `none`;
        Pricing.target.style.display = `none`;
        footer.target.style.display = `none`;

        landing_page.target.style.display = `block`;
        nav_bullets.target.style = "opacity: 1;filter: blur(0px);position: absolute;left: 130%;top: 50%;transform: translate(-50%, -50%);z-index: 1;"
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
    }
    turn = 1
}
//!
bullet[1].onclick = async () => {
    rest()
    if (!tru) {
        await sleep(500)
    }
    tru = false
    if (turn != 2) {
        landing_page.target.style.display = `none`;
        discord.target.style.display = `none`;
        strore.target.style.display = `none`;
        Pricing.target.style.display = `none`;
        footer.target.style.display = `none`;

        aboute.target.style.display = `block`;
        effect_container.target.style = " z-index: 0;";
        effect_children.target.style = "transition: ease 2s; transform: rotate(137deg); opacity: 1;";
        for (let effect_c of span) {
            effect_c.style.backgroundColor = `#ECB365`;
            effect_c.style.boxShadow = "0 0 0 10px rgb(11 11 11 / 27%), inset 0 0 8px #000000, 0 0 100px #ecb365";
        }
        await sleep(500)
        nav_bullets.target.style = "filter: blur(0px);position: absolute;gap: 25px;background-color: rgba(24, 21, 55, 0.44);backdrop-filter: blur(12px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(2vw, 2em) max(-1.6vw, -1.6em) #00000075;display: flex;left: 50%;flex-flow: column wrap;place-content: center space-between;transform: translate(-50%, -50%);align-items: center;z-index: 1;"
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

        for (let card1_lefts of card1_left) {
            card1_lefts.style = "transition: ease 2s; color: #ECB365";
        }
        await sleep(300);
        for (let left of lefts) {
            left.style = "transition: ease 2s; left: 0";
            await sleep(600);
        }
        for (let right of rights) {
            await sleep(100);
            right.style = "transition: ease 2s; right: 0";
        }
        await sleep(2000)
    }
    turn = 2;
}
//!
bullet[2].onclick = async () => {
    rest()
    if (!tru) {
        await sleep(500)
    }
    tru = false
    if (turn != 3) {
        landing_page.target.style.display = `none`;
        aboute.target.style.display = `none`;
        strore.target.style.display = `none`;
        Pricing.target.style.display = `none`;
        footer.target.style.display = `none`;

        await sleep(500)
        nav_bullets.target.style = "filter: blur(0px);position: absolute;gap: 25px;background-color: rgba(24, 21, 55, 0.44);backdrop-filter: blur(12px);padding: max(1vw, 1em);box-shadow: max(0vw, 0em) max(0vw, 0em) max(2vw, 2em) max(-1.6vw, -1.6em) #00000075;display: flex;left: 50%;flex-flow: column wrap;place-content: center space-between;transform: translate(-50%, -50%);align-items: center;z-index: 1;"
        for (let tooltip of tooltips) {
            tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6C63FF;"
        }
        for (let h6 of navBullets_h6) {
            h6.style = "height: 0;width: 0;right: 0;border-style: solid;border-width: 0;border-radius: 0;top: 0;transform: translateY(0%);border-color: transparent transparent transparent transparent;";
        }
        for (let span of navBullets_span) {
            span.style = "left: 0;transform: translate(0px, 0px);top: 0;width: 0;height: 0;background-color: transparent;border-radius: 0;";
        }
        for (let bullet of bullets) {
            bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
        }
        hiedPolitudById("discord_none");
        effect_container.target.style = " z-index: 0;";
        effect_children.target.style = "transition: ease 2s; transform: rotate(227deg); opacity: 1;";
        await sleep(500);
        for (let effect_c of span) {
            effect_c.style.backgroundColor = `#6C63FF`;
            effect_c.style.boxShadow = "0 0 0 0px rgb(11 11 11 / 0%), inset 0 0 20px 0px #000000, inset 0 0 77px 0px #000000";
        }
        discord.target.style.display = `grid`;

        for (let nameImgess of nameImges) {
            nameImgess.style = "transition: ease 2s; color: #6C63FF;";
        }
        await sleep(200);
        for (let left_discord of lefts_discords) {
            left_discord.style = "transition: ease 3s; left: 0;";
        }
        await sleep(700);
        for (let right_discord of rights_discords) {
            right_discord.style = "transition: ease 3s; right: 0;";
        }
    }
    turn = 3
}
//!
bullet[3].onclick = async () => {
    rest()
    if (!tru) {
        await sleep(500);
    }
    tru = false
    if (turn != 4) {
        landing_page.target.style.display = `none`;
        aboute.target.style.display = `none`;
        discord.target.style.display = `none`;
        Pricing.target.style.display = `none`;
        footer.target.style.display = `none`;

        strore.target.style.display = `block`;
        for (let tooltip of tooltips) {
            tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(1.5vw, 1.5em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: #6C63FF;"
        }
        effect_container.target.style = " z-index: 0;";
        effect_children.target.style = "transition: ease 2s; transform: rotate(227deg); opacity: 1;";
        await sleep(500);
        for (let effect_c of span) {
            effect_c.style.backgroundColor = `#6C63FF`;
            effect_c.style.boxShadow = "0 0 0 0px rgb(11 11 11 / 0%), inset 0 0 20px 0px #000000, inset 0 0 77px 0px #000000";
        }

        await sleep(500)
        nav_bullets.target.style = "opacity: 1;filter: blur(0px);position: absolute;background-color: rgb(24 21 55 / 40%);backdrop-filter: blur(30px); padding: 20px;box-shadow: black 0px 0px 16px -3px;display: flex;gap: 75px;left: 50%;width: 79%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -50%);align-items: cente";
        for (let h6 of navBullets_h6) {
            h6.style = "height: 0;width: 0;right: 0;z-index: 0;border-style: solid;border-width: 0;border-radius: 0;top: 0;transform: translateY(0%);border-color: transparent transparent transparent transparent;";
        }
        for (let span of navBullets_span) {
            span.style = "left: 0;transform: translate(0px, 0px);top: 0;width: 0;height: 0;background-color: transparent;border-radius: 0;";
        }
        for (let bullet of bullets) {
            bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
        }
        hiedPolitudById("strore_none");
        await sleep(500);
        for (let nameImgess of nameImges) {
            nameImgess.style = "transition: ease 2s; color: #6C63FF;";
        }
        // ======
        await sleep(700)
        card1_top.style = "transition: ease 2s; left: 0;";
        await sleep(500)
        card1_bottom.style = "transition: ease 2s; right: 0;";
        //
    }
    turn = 4;
}
//!
bullet[4].onclick = async () => {
    rest()
    if (!tru) {
        await sleep(500)
    }
    tru = false
    if (turn != 5) {
        landing_page.target.style.display = `none`;
        aboute.target.style.display = `none`;
        discord.target.style.display = `none`;
        strore.target.style.display = `none`;
        footer.target.style.display = `none`;

        Pricing.target.style.display = `block`;
        
        effect_children.target.style.opacity = `0`;

        await sleep(500)
        nav_bullets.target.style = "opacity: 1;filter: blur(0px); position: absolute;background-color: rgb(0, 206, 121);backdrop-filter: blur(30px);padding: 20px;box-shadow: black 0px 0px 16px -3px;display: flex;gap: 75px;left: 50%;top: 480px;width: 79%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -360px);flex-wrap: wrap;";
        for (let bullet of bullets) {
            bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
        }
        for (let tooltip of tooltips) {
            tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: black;"
        }
        for (let h6 of navBullets_h6) {
            h6.style = "height: 0;width: 0;right: 0;z-index: 0;border-style: solid;border-width: 0;border-radius: 0;top: 0;transform: translateY(0%);border-color: transparent transparent transparent transparent;";
        }
        for (let span of navBullets_span) {
            span.style = "left: 0;transform: translate(0px, 0px);top: 0;width: 0;height: 0;background-color: transparent;border-radius: 0;";
        }
        hiedPolitudById("Pricing_none");
        effect_container.target.style = " z-index: 1;";
        effect_children.target.style = "transition: ease 2s; transform: rotate(141deg); opacity: 1;";
        for (let effect_c of span) {
            effect_c.style.backgroundColor = `#212121`;
            effect_c.style.boxShadow = `#00ce79 0px 0px 0px 0px, #00ce79 0px 0px 0px 0px inset, #00ce79 0px 0px 41px 0px inset`;
        }
    }
    turn = 5;
}
//!
bullet[5].onclick = async () => {
    rest()
    if (!tru) {
        await sleep(500)
    }
    tru = false
    if (turn != 5) {
        landing_page.target.style.display = `none`;
        aboute.target.style.display = `none`;
        discord.target.style.display = `none`;
        strore.target.style.display = `none`;
        Pricing.target.style.display = `none`;

        effect_children.target.style.opacity = `0`;
        footer.target.style.display = `block`;

        await sleep(500)
        nav_bullets.target.style = "filter: blur(0px);position: absolute;background-color: rgb(33 33 33 / 48%); backdrop-filter: blur(40px);padding: max(1.2vw, 1.2em); border-radius: max(0.3vw, 0.3em); box-shadow: max(0vw, 0em) max(0vw, 0em) max(1.2vw, 1.2em) max(-4vw, -4em) #00ce79;display: flex;gap: 5px;left: 50%; width: 80%;flex-flow: row wrap;align-content: center;transform: translate(-50%, -50%);z-index: 7;";
        for (let bullet of bullets) {
            bullet.style = " position: relative;cursor: pointer;width: fit-content;font-size: max(1vw, 1em);height: fit-content;margin: 20px auto; border: none;border-radius: 0px;"
        }
        for (let tooltip of tooltips) {
            tooltip.style = "transition: ease 2s;display: block;position: inherit;font-size: max(2vw, 2em);text-align: center;padding: 0;cursor: default;right: 0;pointer-events: none;background-color: transparent;width: fit-content;top: 0; color: white;"
        }
        for (let h6 of navBullets_h6) {
            h6.style = "height: 0;width: 0;right: 0;z-index: 0;border-style: solid;border-width: 0;border-radius: 0;top: 0;transform: translateY(0%);border-color: transparent transparent transparent transparent;";
        }
        for (let span of navBullets_span) {
            span.style = "left: 0;transform: translate(0px, 0px);top: 0;width: 0;height: 0;background-color: transparent;border-radius: 0;";
        }
        hiedPolitudById("footer_none")
        effect_container.target.style = " z-index: 0;";
        await sleep(500);
        effect_children.target.style = "transition: ease 2s; transform: rotate(141deg); opacity: 1;";
        for (let effect_c of span) {
            effect_c.style.backgroundColor = `#212121`;
            effect_c.style.boxShadow = `#00ce79 0px 0px 0px 0px, #00ce79 0px 0px 0px 0px inset, #00ce79 0px 0px 41px 0px inset`;
        }
        await sleep(100);
        card_left.style = "transition: ease 2s; right: max(0vw, 0em)";
        await sleep(1000);
        card_right.style = "transition: ease 2s; left: max(0vw, 0em)";
        // ========------------========= \\
        await sleep(100);
        text_left.style = "transition: ease 2s; right: 0";
        await sleep(1000);
        text_right.style = "transition: ease 2s; left: 0";
    }
    turn = 5;
}
//!!