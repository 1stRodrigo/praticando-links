//ABRIR E ESCONDER DESCRIÇÃO

var desc = document.getElementById('desc').style.display = 'none';
function mostrarjs() {
    if (desc == 'none' ) {
        desc = document.getElementById('desc').style.display = 'block';
        return true
    }
    else if (desc == 'block') {
        desc = document.getElementById('desc').style.display = 'none';
        return false
    }
}

var deschtml = document.getElementById('deschtml').style.display = 'none';
function mostrarhtml() {
    if (deschtml == 'none' ) {
        deschtml = document.getElementById('deschtml').style.display = 'block';
        return true
    }
    else if (deschtml == 'block') {
        deschtml = document.getElementById('deschtml').style.display = 'none';
        return false
    }
}

var deschard = document.getElementById('deschard').style.display = 'none';
function mostrarhard() {
    if (deschard == 'none' ) {
        deschard = document.getElementById('deschard').style.display = 'block';
        return true
    }
    else if (deschard == 'block') {
        deschard = document.getElementById('deschard').style.display = 'none';
        return false
    }
}

var descrede = document.getElementById('descrede').style.display = 'none';
function mostrarrede() {
    if (descrede == 'none' ) {
        descrede = document.getElementById('descrede').style.display = 'block';
        return true
    }
    else if (descrede == 'block') {
        descrede = document.getElementById('descrede').style.display = 'none';
        return false
    }
}

//TESTANDO ALGUMA FORMA DE RESPONSIVO DO FUNDO BRANCO//

var fundo = document.querySelector('section').style.height;

if (desc == 'block') {
    var cor = document.querySelector('section').style.backgroundColor = 'red'
}

