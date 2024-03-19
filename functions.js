
function validarInput(elemento) {
    elemento.value = elemento.value.replace(/[^a-z\n\s]/g, '');
}
function criptografar() {
    var texto = document.querySelector('.texto-cod').value.toLowerCase();
    var resultado = '';

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'a':
                resultado += 'ai';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += texto[i];
        }
    }

    document.getElementById('card-criptografado').innerHTML = '<p id="resultado" class="texto-original">' + resultado + '</p>';
}
function descriptografar() {
    // Regras de descriptografia
    var regras = [
        {
            // Regra para "enter"
            regex: /enter/g,
            substituicao: "e",
        },
        {
            // Regra para "imes"
            regex: /imes/g,
            substituicao: "i",
        },
        {
            // Regra para "ai"
            regex: /ai/g,
            substituicao: "a",
        },
        {
            // Regra para "ober"
            regex: /ober/g,
            substituicao: "o",
        },
        {
            // Regra para "ufat"
            regex: /ufat/g,
            substituicao: "u",
        },
        {
            // Regra para "ie"
            regex: /ie/g,
            substituicao: "i",
        },
        {
            // Regra para "ate"
            regex: /ate/g,
            substituicao: "a",
        },
        {
            // Regra para "ober"
            regex: /ober/g,
            substituicao: "o",
        },
        {
            // Regra para "ufat"
            regex: /ufat/g,
            substituicao: "u",
        },
    ];

    // Obtém o texto criptografado digitado pelo usuário
    var textoCriptografado = document.querySelector(".texto-cod").value.toLowerCase();

    // Converte o texto para minúsculas
    textoCriptografado = textoCriptografado.toLowerCase();

    // Aplica cada regra à palavra
    for (var i = 0; i < regras.length; i++) {
        textoCriptografado = textoCriptografado.replace(regras[i].regex, regras[i].substituicao);
    }

    // Exibe o texto descriptografado
    document.getElementById("card-criptografado").innerHTML = (
        "<p id='resultado' class='texto-original'>" + textoCriptografado + "</p>"
    );
}

