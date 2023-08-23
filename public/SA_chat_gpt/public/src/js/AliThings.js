"use strict";

const speechType = {
    male:"Male",
    Female:"Female"
}

const speechLang = {
    ar:"Arabic",
    en:"US English"
}

var allDivesP = []
const makeElementWritble = (elm) => {
    elm.contentEditable = true;
    elm.onclick = () => {
        Array.from(elm.parentElement.children).forEach(elm2 => {
            if(elm2.tagName == "BUTTON"){
                elm2.style.display = "block"
                allDivesP.push(elm2)
            }
        })
    }
}

window.onclick = (e) => {
    allDivesP.forEach(elm => {
        if(e?.target?.dataset?.key != elm.dataset.key){
            elm.style.display = "none"
        }
       
    })
}


const readAllStorys = () =>{
    let items = document.querySelectorAll(".SelectAudio");
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = (event) => {
            let test = []
            document.getElementById("StoryTexts").childNodes.forEach(e => {
                let a = String(e.className);
                if (a.includes("Mab"))
                    test.push(e);
            })
    
    
            Array.from(test[i].children).forEach(o => {
                if(String(o.className).includes("text")){
                    const arReg = /[ء-ي]/g
                    speech.PlaySpeech(o.textContent, speechType.Female, arReg.test(o.textContent) ? speechLang.ar : speechLang.en)
                }
            })
        }
    }
}


class Speech {

    LastResult = ""
    NewResult = ""
    Resutls = []

    getSpeech() {
        var speech = new webkitSpeechRecognition();
        var speechText = "";
    
        speech.lang = "ar-SA";
        speech.start()
    
        speech.onstart = () => {
            console.log("Start listen Speech");
        }
    
        speech.onend = () => {
            console.log("End listen to Speech");
        }
    
        speech.onerror = (error) => {
            console.log(`You have Error ${error}`)
        }
    
        speech.onresult = (event) => {
            speechText = event.results[0][0].transcript 
            this.LastResult = this.NewResult;
            this.NewResult = speechText;
            this.Resutls.push(speechText);
        }
    }

    PlaySpeech(text, type, lang)
    {
        responsiveVoice.speak(text, `${lang} ${type}`);
    }

    PauseSpeech()
    {
        if (responsiveVoice.isPlaying()) {
            responsiveVoice.pause()
        } else {
            responsiveVoice.resume()
        }
    }

    StopSpeech()
    {
        responsiveVoice.cancel()
    }
}

class StorySection {
    elm
    constructor(text, dir){
        this.text = text;
        this.dir = dir;
    }

    GetHtml(i)
    {
        let rootNode = document.createElement("div");
        if (this.dir == "left") rootNode.classList.add("rodMab_Continer");
        else if (this.dir == "right") rootNode.classList.add("leftMab_Continer");

        let TextStory = document.createElement("p");
        if (this.dir == "left") TextStory.classList.add("text-rigt");
        else if (this.dir == "right") TextStory.classList.add("text-left");
        TextStory.innerHTML = this.text;
        TextStory.dataset.key = i

        rootNode.appendChild(TextStory);
        rootNode.classList.add("p_key_" + i)
        return rootNode;
    }
}

class StoryBook {
    Sections = []

    Ref() {
        this.RemoveAll();
        allDivesP = []
        // Add Default
        let dinputNode = document.createElement("input");
        dinputNode.checked = true;
        dinputNode.setAttribute("id", "default");
        dinputNode.setAttribute("type", "radio");
        dinputNode.setAttribute("name", "item");
        dinputNode.setAttribute("title", `All Story`);

        for(let i = 0; i < this.Sections.length; i++) {
            let inputNode = document.createElement("input");
            inputNode.setAttribute("type", "radio");
            inputNode.setAttribute("id", `item${i}`);
            inputNode.setAttribute("name", "item");
            inputNode.setAttribute("title", `item ${i}`);
            document.getElementById("summ").appendChild(inputNode)
            
            let ulItem = document.createElement("li")
            let labelItem = document.createElement("label");
            
            labelItem.setAttribute("for", `item${i}`)
            labelItem.setAttribute("class", "SelectAudio");
            labelItem.innerHTML = `section ${i + 1}`
            ulItem.appendChild(labelItem)
            document.getElementById("ItemSumm").appendChild(ulItem)

            const element = this.Sections[i].GetHtml(i)
            var readText = ""
             document.getElementById("summ").prepend(dinputNode)
            const changeButton = document.createElement("button")
            Array.from(element.children).forEach(elm => {
                if(String(elm.className).includes("text")){
                    makeElementWritble(elm)
                    changeButton.dataset.last_story = elm.textContent
                    readText = elm.textContent
                }
            })
            

            
            changeButton.textContent = "Edit"

            changeButton.classList.add("change-button")

            changeButton.dataset.key = i
            element.style.position  = "relative"
            const icon = document.createElement("i")
            icon.classList.add("fa-solid")
            icon.classList.add("fa-pen-to-square")
            icon.classList.add("icon")


            changeButton.style.display = "none"
            changeButton.appendChild(icon)

            
            let pop = document.getElementById("pop");
            let comple = document.getElementById("comple");
            let clospopap = document.getElementById("clospopap");
    
            const showSection = async(sectionId) => {
                pop.style.transition = `all 0.2s cubic-bezier(0, 0.01, 1, 0.57) 0s`;
                pop.style.opacity = `0`;
                pop.style.userSelect = `none`;
                pop.style.zIndex = `-110`;
                await slp(200)
                document.querySelectorAll(".containet").forEach(elm => {
                    elm.style.display = "none"
                })
                document.querySelector(`#${sectionId}`).style.display = "block"
                await slp(200)
                pop.style.transition = `all 0.2s cubic-bezier(0, 0.01, 1, 0.57) 0s`;
                pop.style.opacity = `1`;
                pop.style.zIndex = `100`;
                pop.style.userSelect = `unset`;
            }
            changeButton.classList.add("b_key_" + i)
            
            changeButton.onclick = () =>{
                console.log(document.querySelector(".b_key_" + i))
                document.querySelector("#last_story_sender").value = document?.querySelector(".p_key_" + i).querySelector("p")?.textContent 
                || document.querySelector("#title")?.textContent
                document.querySelector("#targted_p").value = ".p_key_" + i
                showSection("cmplete_Edit")
            }
            clospopap.onclick = () => {
                pop.style.transition = `all 0.2s cubic-bezier(0, 0.01, 1, 0.57) 0s`;
                pop.style.opacity = `0`;
                pop.style.userSelect = `none`;
                pop.style.zIndex = `-110`;
            }
            document.getElementById("StoryTexts").appendChild(element)
            element.appendChild(changeButton)
        }
    }

    add(Storyobject) {
        if (Storyobject instanceof StorySection) {
            this.Sections.push(Storyobject);
           this.Ref();
            readAllStorys()

            return {
                isAdded:true,
                elm:Storyobject
            }
        } else {
            return {
                isAdded:false,
                elm:null
            }
        }
    }

    RemoveAll() {
        while (document.getElementById("StoryTexts").firstChild) {
            document.getElementById("StoryTexts").removeChild(document.getElementById("StoryTexts").lastChild);
        }

        while (document.getElementById("ItemSumm").firstChild) {
            document.getElementById("ItemSumm").removeChild(document.getElementById("ItemSumm").lastChild);
        }
    }

    AddOptionMeun()
    {

    }
}


let speech = new Speech();


let Storys = new StoryBook();




