"use strict";
class YoFiElement {
    attrs;
    cheldren;
    element;
    jQElement;
    constructor({ attrs, tag, cheldren, init, textContent }) {
        const element = document.createElement(tag);
        this.element = element;
        if (attrs) {
            this.attrs = attrs;
            if (attrs.type) {
                this.element.type = attrs.type;
            }
            if (attrs.src) {
                this.element.src = attrs.src;
            }
            if (attrs.id) {
                this.element.id = attrs.id;
            }
            if (attrs.dataset) {
                for (let data of Object.keys(attrs.dataset)) {
                    this.element.dataset[data] = attrs.dataset[data];
                }
            }
            if (attrs.classes) {
                for (let className of attrs.classes) {
                    this.element.classList.add(className);
                }
            }
            if (attrs.style) {
                this.setStyles(attrs.style);
            }
            if (attrs.href) {
                this.element.href = attrs.href;
            }
            if (attrs.baseSelector) {
                const father = document.querySelector(attrs.baseSelector);
                if (father) {
                    father.appendChild(this.element);
                }
            }
        }
        if (textContent) {
            this.element.textContent = textContent;
        }
        if (cheldren) {
            this.cheldren = cheldren;
            cheldren.forEach(elm => {
                this.element.appendChild(elm.element);
            });
        }
        this.jQElement = $(this.element);
        if (init) {
            init(this);
        }
        return;
    }
    setStyles(styles) {
        this.element.style = "";
        for (let style of Object.keys(styles)) {
            this.element.style[style] = styles[style];
        }
        if (this.attrs) {
            this.attrs.style = styles;
        }
        return this;
    }
    removeClasses(classes) {
        for (let className of classes) {
            this.element.classList.remove(className);
            if (this.attrs?.classes) {
                this.attrs.classes = this.attrs.classes.filter(value => value != className);
            }
        }
        return this;
    }
    addClasses(classes) {
        for (let className of classes) {
            this.element.classList.add(className);
            if (this.attrs) {
                this.attrs.classes?.push(className);
            }
        }
        return this;
    }
    addStyles(styles) {
        for (let style of Object.keys(styles)) {
            this.element.style[style] = styles[style];
        }
        if (this.attrs) {
            this.attrs.style = { ...this.attrs.style, ...styles };
        }
        return this;
    }
    removeStyles(styles) {
        for (let style of styles) {
            this.element.style.removeProperty(style);
            if (this.attrs && this.attrs.style) {
                delete this.attrs.style[style];
            }
        }
        return this;
    }
    removeAllStyles() {
        this.element.attributes.removeNamedItem("style");
        if (this.attrs && this.attrs.style) {
            this.attrs.style = undefined;
        }
        return this;
    }
    // events
    onClick(func) {
        this.element.onclick = (e) => {
            func(e);
        };
        return this;
    }
    onMouseDown(func) {
        this.element.onmousedown = (e) => {
            func(e);
        };
        return this;
    }
    onMouseUp(func) {
        this.element.onmouseup = (e) => {
            func(e);
        };
        return this;
    }
    onMouseMove(func) {
        this.element.onmousemove = (e) => {
            func(e);
        };
        return this;
    }
    onTouchStart(func) {
        this.element.ontouchstart = (e) => {
            func(e);
        };
        return this;
    }
    onTouchEnd(func) {
        this.element.ontouchend = (e) => {
            func(e);
        };
        return this;
    }
    onTouchMove(func) {
        this.element.ontouchmove = (e) => {
            func(e);
        };
        return this;
    }
}
class Y {
    static h1 = "h1";
    static h2 = "h2";
    static h3 = "h3";
    static h4 = "h4";
    static h5 = "h5";
    static h6 = "h6";
    static div = "div";
    static span = "span";
    static p = "p";
    static header = "header";
    static li = "li";
    static ul = "ul";
    static main = "main";
    static section = "section";
    static script = "script";
    static img = "img";
    static br = "br";
    static a = "a";
    static button = "button";
    static i = "i";
    static iframe = "iframe";
    static td = "td";
    static tr = "tr";
    static tbody = "tbody";
    static table = "table";
    static input = "input";
    static source = "source";
    static video = "video";
    static audio = "audio";
    static noscript = "noscript";
    static label = "label";
    static select = "select";
    static option = "option";
}
const baseId = (id) => {
    return `#${id}`;
};
const baseClass = (className) => {
    return `.${className}`;
};
const baseElm = (element) => {
    return element;
};
const c = ({ tag, attrs, cheldren, init, textContent }) => {
    return new YoFiElement({
        tag: tag,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const cc = (tag, textContent, attrs, baseSelector, cheldren, init) => {
    return new YoFiElement({
        tag: tag,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h1 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h1 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h2 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h2 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h3 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h3 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h4 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h4 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h5 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h5 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h6 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h6 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _label = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $label = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _option = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.option,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $option = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.option,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _select = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.select,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $select = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.select,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _div = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $div = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _span = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $span = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _p = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $p = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _header = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $header = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _li = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $li = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _ul = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ul = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _main = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $main = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _section = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $section = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _script = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $script = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _img = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.img,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $img = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.img,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _br = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $br = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _a = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $a = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _button = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $button = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _i = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.i,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $i = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.i,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _iframe = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $iframe = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _td = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $td = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tbody = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tbody = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _table = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $table = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _input = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $input = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _source = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $source = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _video = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $video = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _audio = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $audio = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _noscript = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $noscript = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
// const YEElm = ({tag, attrs, baseSelector, cheldren, init, textContent}:YoFiElementContructer) => {
//     return new YoFiElement({
//         tag:tag,
//         attrs:attrs,
//         baseSelector:baseSelector,
//         cheldren:cheldren,
//         init:init,
//         textContent:textContent
//     })
// }
// function div({attrs, baseSelector, cheldren, init, textContent}:{
//     attrs?:attrTtype,
//     cheldren?:YoFiElement[],
//     baseSelector?:string
//     textContent?:string
//     init?:() => void
// }):YoFiElement{
//     return new YoFiElement({
//         tag:YElms.div,
//         attrs:attrs,
//         baseSelector:baseSelector,
//         cheldren:cheldren,
//         init:init,
//         textContent:textContent
//     })
// } 
