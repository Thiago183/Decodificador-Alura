var textArea = document.querySelector(".text-area"); 
var mensagem = document.querySelector('.mensagem');
var texto = document.querySelector('.texto');
var textoP = document.querySelector('.textoP');

function btnEncriptar(){
const textoCripto = encriptar(textArea.value);

if(textoCripto.length > 0){
    texto.innerText = "";
    textoP.innerText = "";

}



mensagem.value = textoCripto;
textArea.value = "";

}


function encriptar(mensagemEncriptada){
    var cifraMatriz = [ 
        ['e','enter']
        ,['i','imes']
        ,['a','ai']
        ,['o','ober']
        ,['u','ufat']];
    mensagemEncriptada = mensagemEncriptada.toLowerCase();

    const regexacentos = /[àáâãäåæçèéêëìíîïñòóôõöøùúûüýÿ]/i;
    const regexCaracteresEspeciais = /[^a-z0-9 ]/i;

    if (regexacentos.test(mensagemEncriptada)) {
        alert("Somente caracteres sem acento");
        return ""; 
    }  
     if (regexCaracteresEspeciais.test(mensagemEncriptada)) {
        alert("Somente letras são permitidas");
        return "";
    }
    for(let i=0 ;i < cifraMatriz.length;i++){
        if (mensagemEncriptada.includes(cifraMatriz[i][0]))
            {
            mensagemEncriptada =  mensagemEncriptada.replaceAll(cifraMatriz[i][0],cifraMatriz[i][1]);

        } ; 

    };
    return mensagemEncriptada

}

function btnDescriptografar(){
    const textoDescripto = descriptografar(textArea.value);

    if(textoDescripto.length > 0){
        texto.innerText = "";
        textoP.innerText = "";
    
    }

    mensagem.value = textoDescripto;
    textArea.value = "";

}


function descriptografar(mensagemDescriptada){
    var cifraMatriz = [ 
        ['e','enter']
        ,['i','imes']
        ,['a','ai']
        ,['o','ober']
        ,['u','ufat']];
    mensagemDescriptada = mensagemDescriptada.toLowerCase();
        
    

    const regexacentos = /[àáâãäåæçèéêëìíîïñòóôõöøùúûüýÿ]/i;
    const regexCaracteresEspeciais = /[^a-z0-9 ]/i;
    
    if (regexacentos.test(mensagemDescriptada)) {
        alert("Somente caracteres sem acento");
        return ""; 
    }
    if (regexCaracteresEspeciais.test(mensagemDescriptada)) {
        alert("Somente letras são aceitas");
        return "";
    }

    for(let i=0 ;i < cifraMatriz.length;i++){
        if (mensagemDescriptada.includes(cifraMatriz[i][0]))
            {
                mensagemDescriptada =  mensagemDescriptada.replaceAll(cifraMatriz[i][1],cifraMatriz[i][0]);

        } ; 

    };
    return mensagemDescriptada

}



