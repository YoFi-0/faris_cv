interface attrTtype {
    classes?:string[],
    dataset?:any
    id?:string
    style?:YoFiStyles,
    href?:string,
    src?:string
    type?:string
    baseSelector?:string
}


interface YoFiElementContructer {
    attrs?:attrTtype,
    tag:string,
    cheldren?:YoFiElement[],
    textContent?:string
    init?:(elem:YoFiElement) => void
}



type YoFiStyles =   {
    [P in keyof CSSStyleDeclaration]?: String | "none" | "unset" | "auto" | "inherit" | "initial";
} | {
    position?:String | "absolute" | "fixed" | "inherit" | "initial" | "relative" | "revert" | "static" | "sticky" ;
    display?:String | "block" | "contents" | "flex" | "grid"  | "contents" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "table";
    border?:String | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";
    borderStyle?:String | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";
    listStyleType?:String | "circle" | "square" | "upper-roman" | "lower-alpha" ;
    listStylePosition?:String | "outside" | "inside";
    overflow?: String | "visible" | "hidden" | "scroll" | "auto";
    overflowX?: String | "visible" | "hidden";
    overflowY?: String | "visible" | "hidden";
    property?: String | "value";
    direction?:String | ""
    flex?:String | "content"
    justifyContent?:String |""
    alignContent?:String |""
    alignItems?:String |""
    alignSelf?:String | ""
    backdropFilter?:String |""
    listStyle?:String |""
    justifyItems?:String | ""
    justifySelf?:String | ""
} & {
    [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
}


interface YoFiEvnts {
    onClick: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseDown: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseUp: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseMove: (func:(e:MouseEvent) => void) => YoFiElement
    onTouchStart: (func:(e:TouchEvent) => void) => YoFiElement
    onTouchEnd: (func:(e:TouchEvent) => void) => YoFiElement
    onTouchMove: (func:(e:TouchEvent) => void) => YoFiElement
}

interface YoFiFunctions {
    setStyles:(styles:YoFiStyles) => YoFiElement
    addStyles:(styles:YoFiStyles) => YoFiElement
    removeStyles:(styles:string[]) => YoFiElement
    removeAllStyles:() => YoFiElement
    addClasses:(classes:string[]) => YoFiElement;
    removeClasses:(classes:string[]) => YoFiElement;
}

class YoFiElement implements YoFiEvnts, YoFiFunctions{
    attrs:attrTtype | undefined
    cheldren:YoFiElement[] | undefined
    element:HTMLElement
    jQElement:JQuery<HTMLElement>
    constructor({attrs, tag, cheldren, init, textContent}:YoFiElementContructer) {
        const element = document.createElement(tag)!
        this.element = element
        if(attrs){
            this.attrs = attrs
            if(attrs.type){
                (this.element as HTMLInputElement).type = attrs.type
            }
            if(attrs.src){
                (this.element as HTMLImageElement).src = attrs.src
            }
            if(attrs.id){
                this.element.id = attrs.id
            }
            if(attrs.dataset){
                for(let data of Object.keys(attrs.dataset)){
                    (this.element as any).dataset[data] = attrs.dataset[data]
                }
                
            }
            if(attrs.classes){
                for(let className of attrs.classes){
                    this.element.classList.add(className)
                }
            }
            if(attrs.style){
                this.setStyles(attrs.style)
            }
            if(attrs.href){
                (this.element as HTMLAnchorElement).href = attrs.href
            }
            if(attrs.baseSelector){
                const father = document.querySelector(attrs.baseSelector)
                if(father){
                    father.appendChild(this.element)
                }
            }
        }



        if(textContent){
            this.element.textContent = textContent
        }
        if(cheldren){
            this.cheldren = cheldren
            cheldren.forEach(elm => {
                this.element.appendChild(elm.element)
            })
        }
        this.jQElement = $(this.element)
        if(init){
            init(this)
        }
        return
    }

    setStyles(styles:YoFiStyles):YoFiElement{
        (this.element as any).style = ""
        for(let style of Object.keys(styles)){
            (this.element as any).style[style] = (styles as any)[style]
        }
        if(this.attrs){
            this.attrs.style = styles
        }
        return this
    }
    removeClasses(classes: string[]) {
        for(let className of classes){
            this.element.classList.remove(className)
            if(this.attrs?.classes){
                this.attrs.classes = this.attrs.classes.filter(value => value != className)
            }
        }
        return this
    }
    addClasses(classes: string[]) {
        for(let className of classes){
            this.element.classList.add(className)
            if(this.attrs){
                this.attrs.classes?.push(className)
            }
        }
        return this
    }
    addStyles(styles:YoFiStyles):YoFiElement{
        for(let style of Object.keys(styles)){
            (this.element as any).style[style] = (styles as any)[style]
        }
        if(this.attrs){
            (this.attrs.style as any) = {...this.attrs.style, ...styles}
        }
        return this
    }
    removeStyles(styles: string[]):YoFiElement{
        for(let style of styles){
            this.element.style.removeProperty(style)
            if(this.attrs && this.attrs.style){
               delete (this.attrs.style as any)[style]
            }
        }
        return this
    }
    removeAllStyles():YoFiElement{
        this.element.attributes.removeNamedItem("style")
        if(this.attrs && this.attrs.style){
            this.attrs.style = undefined
        }
        return this
    }

    // events
    onClick(func:(e:MouseEvent) => void){
        this.element.onclick = (e) => {
            func(e)
        }
        return this
    }
    onMouseDown(func:(e:MouseEvent) => void){
        this.element.onmousedown = (e) => {
            func(e)
        }
        return this
    }
    onMouseUp(func:(e:MouseEvent) => void){
        this.element.onmouseup = (e) => {
            func(e)
        }
        return this
    }
    onMouseMove(func:(e:MouseEvent) => void){
        this.element.onmousemove = (e) => {
            func(e)
        }
        return this
    }
    onTouchStart(func:(e:TouchEvent) => void){
        this.element.ontouchstart = (e) => {
            func(e)
        }
        return this
    }
    onTouchEnd(func:(e:TouchEvent) => void){
        this.element.ontouchend = (e) => {
            func(e)
        }
        return this
    }
    onTouchMove(func:(e:TouchEvent) => void){
        this.element.ontouchmove = (e) => {
            func(e)
        }
        return this
    }
}

class Y  {
    public static readonly h1 = "h1"
    public static readonly h2 = "h2"
    public static readonly h3 = "h3"
    public static readonly h4 = "h4"
    public static readonly h5 = "h5"
    public static readonly h6 = "h6"
    public static readonly div = "div"
    public static readonly span = "span" 
    public static readonly p = "p"
    public static readonly header = "header" 
    public static readonly li = "li" 
    public static readonly ul = "ul"
    public static readonly main = "main"
    public static readonly section = "section"
    public static readonly script = "script"
    public static readonly img = "img"
    public static readonly br = "br"
    public static readonly a = "a"
    public static readonly button = "button"
    public static readonly i = "i"
    public static readonly iframe = "iframe"
    public static readonly td = "td"
    public static readonly tr = "tr"
    public static readonly tbody = "tbody"
    public static readonly table = "table"
    public static readonly input = "input"
    public static readonly source = "source"
    public static readonly video = "video"
    public static readonly audio = "audio"
    public static readonly noscript = "noscript"
    public static readonly label = "label"
    public static readonly select = "select"
    public static readonly option = "option"
}

const baseId = (id:string) => {
    return `#${id}`
}
const baseClass = (className:string) => {
    return `.${className}`
}
const baseElm = (element:string) => {
    return element
}

const c = ({tag, attrs, cheldren, init, textContent}:YoFiElementContructer) => {
    return new YoFiElement({
        tag:tag,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}
const cc = (tag:string, textContent?:string , attrs?:attrTtype, baseSelector?:string, cheldren?:YoFiElement[], init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:tag,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

type ElemOptions = {baseSelector?:string, init?:(elem:YoFiElement) => void}


const _h1 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h1 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h2 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h2 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h3 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h3 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h4 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h4 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h5 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h5 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h6 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h6 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _label = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $label = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _option = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.option,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $option = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.option,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _select = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.select,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $select = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.select,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _div = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $div = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _span = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $span = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _p = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $p = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _header = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $header = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _li = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $li = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _ul = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $ul = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _main = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $main = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _section = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $section = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _script = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $script = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _img = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.img,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $img = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.img,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _br = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $br = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _a = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $a = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _button = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $button = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _i = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $i = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _iframe = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $iframe = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _td = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $td = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _tr = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $tr = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _tbody = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $tbody = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _table = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $table = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _input = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $input = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _source = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $source = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _video = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $video = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _audio = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $audio = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _noscript = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $noscript = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}



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
