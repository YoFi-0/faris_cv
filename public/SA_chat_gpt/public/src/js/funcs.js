"use strict";
const slp = async (dlay) => {
    await new Promise(r => setTimeout(r, dlay));
};
const _ = (selectot) => {
    return document.querySelector(selectot);
};
const showLoding = () => {
    console.log("shooow");
    console.log(document.querySelector(".loding-corner"));
    document.querySelector(".loding-corner").style.opacity = "1";
};
const hideLoding = () => {
    document.querySelector(".loding-corner").style.opacity = "0";
};
class Storys_api {
    constructor() {
    }
    async req(path, method, options) {
        const req = await fetch(`http://127.0.0.1:8000/api/v1${path}`, {
            method: method,
            headers: options?.headers,
            body: options?.body
        });
        const res = await req.json();
        return res;
    }
    async refresh() {
        return await this.req("/refresh", "GET");
    }
    async create({ title, characters, about }) {
        return await this.req(`/create?data=${JSON.stringify({
            title: title,
            characters: characters,
            about: about
        })}`, "GET");
    }
    async complete({ characters, about }) {
        return await this.req(`/complete?data=${JSON.stringify({
            characters: characters,
            about: about
        })}`, "GET");
    }
    async complete_from_body({ characters, about, last_story, last_title }) {
        return await this.req(`/complete_from_body?data=${JSON.stringify({
            last_story: last_story,
            last_title: last_title,
            characters: characters,
            about: about
        })}`, "GET");
    }
    async end({ about, last_story, last_title }) {
        return await this.req(`/end?data=${JSON.stringify({
            last_story: last_story,
            last_title: last_title,
            about: about
        })}`, "GET");
    }
    async create_img({ title }) {
        return await this.req(`/create_img?data=${JSON.stringify({
            title: title
        })}`, "GET");
    }
    async ask({ question }) {
        return await this.req(`/create_img?data=${JSON.stringify({
            question: question
        })}`, "GET");
    }
}
const YoFi_Api = new Storys_api();
const optionsCreateor = (formId) => {
    return {
        last_story: document.querySelector(`.p_key_${Storys.Sections.length - 1}`)?.querySelector("p")?.textContent,
        last_title: document.querySelector("#title")?.textContent || "محتوى",
        about: _(`#${formId}`).querySelector(`.about`).value,
        characters: [
            {
                characteristic: _(`#${formId}`).querySelector(`.c_name`).value,
                gender: _(`#${formId}`).querySelector(`.c_features`).value,
                name: _(`#${formId}`).querySelector(`.c_Gender`).value,
            }
        ]
    };
};
_("#InputPopForm_complite").querySelector(".done").onclick = async () => {
    console.log("lala");
    hideSecrion();
    showLoding();
    optionsCreateor("InputPopForm_complite");
    const compliteRes = await YoFi_Api.complete_from_body(optionsCreateor("InputPopForm_complite"));
    console.log(compliteRes);
    Storys.add(new StorySection(compliteRes.story, "right"));
    hideLoding();
};
_("#Input_Ai_Edetor").querySelector(".done").onclick = async () => {
    hideSecrion();
    showLoding();
    const compliteRes = await YoFi_Api.complete_from_body({
        last_story: document.querySelector("#last_story_sender").value,
        last_title: document.querySelector("#title")?.textContent || "محتوى",
        about: _(`#Input_Ai_Edetor`).querySelector(`.about`).value,
    });
    console.log(compliteRes);
    document.querySelector(document.querySelector("#targted_p").value).querySelector("p").textContent = compliteRes.story;
    hideLoding();
};
_("#InputEndStory").querySelector(".done").onclick = async () => {
    console.log("lala");
    hideSecrion();
    showLoding();
    optionsCreateor("InputPopForm_complite");
    const compliteRes = await YoFi_Api.end({
        about: _("#InputEndStory").querySelector(".about").value,
        last_story: document.querySelector(`.p_key_${Storys.Sections.length - 1}`)?.querySelector("p")?.textContent,
        last_title: document.querySelector("#title")?.textContent || "محتوى",
    });
    console.log(compliteRes);
    Storys.add(new StorySection(compliteRes.story, "right"));
    hideLoding();
};
const completeAi = (about) => {
};
// YoFi_Api.refresh().then((res) => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
const hiedWelcome = async () => {
    const logo = _('.logo');
    const header = _("header");
    const minde_button = _("#butbut");
    const helloDiv = _(".hello");
    const write_line = _(".section .befoer");
    const storeBage = _(".storys");
    const i_create_title_test = _(".i_create_title");
    if (i_create_title_test.value.length == 0) {
        return;
    }
    const removeHello = (style) => {
        helloDiv.style.transform = style;
        minde_button.style.transform = style;
    };
    logo.style.transform = "translateX(2000%)";
    helloDiv.style.transition = "0.3s";
    removeHello("translateY(2000%)");
    write_line.style.transform = "translateY(-2000%)";
    await slp(500);
    showLoding();
    storeBage.style.opacity = "0";
    storeBage.style.transition = "0.3s";
    storeBage.style.display = "block";
    storeBage.style.userSelect = "none";
    const i_create_about = _(".i_create_about");
    const i_create_title = _(".i_create_title");
    const allCharctors = document.querySelectorAll(".singel_ch");
    const createOptions = {
        title: i_create_title.value,
        about: i_create_about.value,
        characters: Array.from(allCharctors).map(elm => {
            return {
                name: elm.querySelector(`.input_0`).value,
                characteristic: elm.querySelector(`.input_1`).value,
                gender: elm.querySelector(`.input_2`).value,
            };
        })
    };
    const createRs = await YoFi_Api.create(createOptions);
    Storys.add(new StorySection(createRs.story, "right"));
    document.querySelector("#title").textContent = i_create_title.value;
    document.querySelector("#title_about").textContent = createRs.story.split(".")[1];
    document.querySelector("#titleImg").src = createRs.img_url;
    hideLoding();
    storeBage.style.opacity = "1";
    storeBage.style.userSelect = "unset";
    await slp(1000);
    header.style.scale = "1";
};
