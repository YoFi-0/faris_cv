"use strict";
const create_characters_btn = document.querySelector("#create_characters_btn");
let charters = 0;
const sleep = async (dlay) => {
    await new Promise(r => setTimeout(r, dlay));
};
create_characters_btn.onclick = () => {
    var style = undefined;
    var xButton;
    var father;
    if (charters == 5) {
        return;
    }
    if (charters >= 1) {
        style = {
        // borderTop:"#000 max(0.1vw, 0.1em) solid"
        };
    }
    charters++;
    _div([
        _i([], {
            style: {
                position: "absolute",
                cursor: "pointer",
                fontSize: "max(0.8vw, 0.8em)"
            },
            classes: ["fa-solid", "fa-x"]
        }, (elm) => {
            xButton = elm;
        }),
        ...[
            "الإسم",
            "الصفات",
            "الجنس"
        ].map((name, i) => {
            return _div([
                _label([
                    name
                ]),
                name == "الجنس" ? _select([
                    _option(["ذكر"]),
                    _option(["انثى"]),
                ], {
                    classes: [`input_${i}`]
                }) :
                    _input([], {
                        type: "text",
                        classes: [`input_${i}`]
                    })
            ], {
                classes: ["single_input"],
            });
        })
    ], {
        classes: ["singel_ch"],
        style: style,
        baseSelector: baseClass('charcters_inputs')
    }, (elm) => {
        father = elm;
    });
    xButton.onClick(async () => {
        charters--;
        father.addStyles({
            scale: "0",
            transition: "0.3s"
        });
        await sleep(500);
        father.element.remove();
    });
};
