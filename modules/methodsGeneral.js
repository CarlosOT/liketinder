/**
 * getElementById(**idElement**).style.display = "none"
 * @param {string} idElement  
 */
export function hideElement(idElement){document.getElementById(idElement).style.display = "none"
}

/**
 * getElementById(**idElement**).style.display = "block"
 * @param {string} idElement 
 */
export function showElement(idElement){document.getElementById(idElement).style.display = "block"}

/**
 * getElementById(**idElement**).style.backgroundColor = **value**
 * @param {string} value 
 * @param {string} idElement  
 */
export function setBgColor(idElement, value){document.getElementById(idElement).style.backgroundColor = value}

/**
 * getElementById(**idElement**).style.backgroundImage = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgImg(idElement, value){document.getElementById(idElement).style.backgroundImage = value}

/**
 * getElementById(**idElement**).style.color = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setFontColor(idElement, value){document.getElementById(idElement).style.color = value}

/**
 * getElementById(**idElement**).innerHTML = **content**
 * @param {string} idElement 
 * @param {*} content 
 */
export function insertHtml(idElement, content){document.getElementById(idElement).innerHTML = content}

/**
 * getElementById(**idElement**).innerText = **content**
 * @param {string} idElement 
 * @param {*} content 
 */
export function insertText(idElement, content){document.getElementById(idElement).innerText = content}

/**
 * parseInt(document.getElementById(**idElement**).innerHTML
 * @param {string} idElement 
 * @returns
 */
export function htmlValueToInt(idElement){return parseInt(document.getElementById(idElement).innerHTML)}

/**
 * getElementById(**idElement**).style.width = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setWidth(idElement, value){document.getElementById(idElement).style.width = value}

/**
 * getElementById(**idElement**).style.height = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setHeight(idElement, value){document.getElementById(idElement).style.height = value}

/**
 * getElementById(**idElement**).style.lineHeight = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setLnHeight(idElement, value){document.getElementById(idElement).style.lineHeight = value}

/**
 * getElementById(**idElement**).style.borderRadius = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBorderRd(idElement, value){document.getElementById(idElement).style.borderRadius = value}

/**
 * getElementById(**idElement**).style.border = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBorder(idElement, value){document.getElementById(idElement).style.border = value}

/**
 * getElementById(**idElement**).style.margin = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMargin(idElement, value){document.getElementById(idElement).style.margin = value}

/**
 * getElementById(**idElement**).style.marginTop = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMarginTop(idElement, value){document.getElementById(idElement).style.marginTop = value}

/**
 * getElementById(**idElement**).style.marginBottom = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMarginBottom(idElement, value){document.getElementById(idElement).style.marginBottom = value}

/**
 * getElementById(**idElement**).style.fontSize = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setFontSize(idElement, value){document.getElementById(idElement).style.fontSize = value}

/**
 * getElementById(**idElement**).focus()
 * @param {string} idElement posso escrever sobre este parâmetro
 */
export function setFocus(idElement){document.getElementById(idElement).focus()}

/**
 * document.getElementById(**idElement**).value.length
 * @param {string} idElement 
 * @returns {number}
 */
export function getLength(idElement){return document.getElementById(idElement).value.length}

/**
 * getElementById(**idElement**).value = **content**
 * @param {string} idElement 
 * @param {*} content
 */
export function setValue(idElement, content){document.getElementById(idElement).value = content}

/**
 * getElementById(**idElement**).value
 * @param {string} idElement 
 * @param {*} content
 */
export function getValue(idElement){return document.getElementById(idElement).value}

/**
 * getElementById(**idElement**).placeholder = **content**
 * @param {string} idElement 
 * @param {string} content 
 */
export function setPlaceHolder(idElement, content){document.getElementById(idElement).placeholder = content}

/**
 * getElementById(**dElement**).style.borderColor = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBorderColor(idElement, value){document.getElementById(idElement).style.borderColor = value}

/**
 * getElementById(**idElement**).style["boxShadow"] = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBoxShadow(idElement, value){document.getElementById(idElement).style["boxShadow"] = value}

/**
 * document.getElementById(**idElement**).href = **url**
 * @param {string} idElement 
 * @param {string} url 
 */
export function setHref(idElement, url){document.getElementById(idElement).href = url}

/**
 * getElementById(**idElement**).addEventListener('click', **nameFunction**)
 * @param {string} idElement 
 * @param {function} nameFunction 
 */
export function addEventClick(idElement, nameFunction){document.getElementById(idElement).addEventListener('click', nameFunction)}


// ------------------------------------------------------------------------------------------------------------------------------------------TYPEWRITE
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function typeWriterHeadline(){
    document.getElementById("headline").innerHTML = '';
    var i = 0;
    function typeWriter(){
        if (0 < getTxt.list.headlines[mv.getCounter()].length) {
        document.getElementById("headline").innerHTML += getTxt.list.headlines[mv.getCounter()].charAt(i);
        i++;
        setTimeout(typeWriter, 10);
        }
    } 
    typeWriter();
}



