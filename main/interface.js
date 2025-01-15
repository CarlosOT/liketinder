import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"
import * as fontCode from "../main/fontCode.js"

//fontCode.popup();
fontCode.initialSetup(); // antes do botão ser clicado

mg.addEventClick('botaoOk', execucao); // usuário clicou no botão
function execucao(){ 
    if(fontCode.initialValidation() == true){
    }else if(mv.getCounter() < (getTxt.list.headlines.length - 1)){

        mv.incrementCounter();
        fontCode.hideSome();
        fontCode.setHeadlines();
        fontCode.concatLink();
        fontCode.clearInput();
        fontCode.progressBar();
        fontCode.inputPlaceHolder();
        //fontCode.buttonFadeIn();

    }else{fontCode.finalScreen();}
}