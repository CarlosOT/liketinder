import * as gt from "./getTexts.js"

//ATRIBUTOS

let progresso = 0;
let largura = 0;
let contador = 0;
let linkWhatsApp = gt.texts.linkWhats;
let dayWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
let semester1 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
let semester2 = ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let fullYear = [...semester1, ...semester2];
const date = new Date();
const periodDay = date.getHours();

//(ramdom) acessados globalmente para definir código da oferta no final da execução
export let setRandom = Math.floor(Math.random() * 2); 
export let randomCopy = Math.floor(Math.random() * gt.txtPromo.length); 
export let randomCopyColor = Math.floor(Math.random() * gt.colorPromo.length);

//MÉTODOS

/**
 * retorna copy promocional de forma aleatória para testes
 * @returns 
 */
export function getCopyPromo(){
    switch(randomCopy){
        case 0:
            return gt.txtPromo.at(randomCopy);
            break;
        case 1:
            return gt.txtPromo.at(randomCopy);
            break;
        case 2:
            return gt.txtPromo.at(randomCopy);
            break;
    }
}

/**
 * retorna saudação de acordo com o período do dia
 * @returns 
 */
export function getGreetingsDay(){
    if(periodDay >= 6 && periodDay < 12){
        return gt.texts.greetings.at(0).toUpperCase();
    }else if(periodDay >= 12 && periodDay < 18){
        return gt.texts.greetings.at(1).toUpperCase();
    }else{
        return gt.texts.greetings.at(2).toUpperCase();
    }
}

/**
 * @returns 
 */
export function getNameMonth(){return fullYear.at(date.getMonth())}

/**
 * @returns 
 */
export function getNameDay(){return ` Ótima ${dayWeek.at(date.getDay())} | 

`}

/**
 * @returns 
 */
export function getDateYear(){return date.getFullYear()}

/**
 * return **linkWhatsApp**
 * @returns 
 */
export function getLinkWhats(){return linkWhatsApp}

/**
 * return **progresso**
 * @returns 
 */
export function getProgresso(){return progresso}

/**
 * return **largura**
 * @returns 
 */
export function getLargura(){return largura}

/**
 * return **contador**
 * @returns 
 */
export function getCounter(){return contador}



/**
 * linkWhatsApp += **value**
 * @param {string} value 
 */
export function setLinkWhats(value){linkWhatsApp += value;}

/**
 * progresso += **value**
 * @param {int} value 
 */
export function setProgresso(value){progresso += value}

/**
 * largura += **value**
 * @param {int} value 
 */
export function setLargura(value){largura += value}

/**
 * **contador++**
 * @param {int} value 
 */
export function incrementCounter(){contador++}

/**
 * retorna cor de fundo da faixa do topo da página
 * @returns 
 */
export function setPromoColor(){
    switch(randomCopyColor){
        case 0:
            return gt.colorPromo.at(randomCopyColor);
            break;
        case 1:
            return gt.colorPromo.at(randomCopyColor);
            break;
        case 2:
            return gt.colorPromo.at(randomCopyColor);
            break;
    }
}

/**
 * limpa o valor do random quando a página não mostra a copy promocional (usado para definir o código da oferta no final)
 */
export function clearRandom(){
    randomCopy = '';
    randomCopyColor = '';
    setRandom = '';
}

/**
 * reseta o random para ser usado de novo
 */
export function resetRandom(){
    setRandom = Math.floor(Math.random() * 2); 
    randomCopy = Math.floor(Math.random() * gt.txtPromo.length); 
    randomCopyColor = Math.floor(Math.random() * gt.colorPromo.length);
}

