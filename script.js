var largura = 0;
var altura = 0;

//definindo dimensões do jogo
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth
}
ajustarTamanhoPalcoJogo();

//atribuindo posições aleatorias as varáveis
var posicaoX = Math.floor((Math.random() * largura) - 90);
var posicaoY = Math.floor((Math.random() * altura) - 90);

//controle para posição não ser menor que 0
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

//atrinuindo uma classe aleatoria ao elemento (px do mosquito)
function tamanhoMosquito() {
    var tamanhoMosquitoAleatorio = Math.floor(Math.random() * 10);

    if (tamanhoMosquitoAleatorio >= 0 && tamanhoMosquitoAleatorio < 4) {
        mosquito.className = 'mosquito1';
    } else if (tamanhoMosquitoAleatorio >= 4 && tamanhoMosquitoAleatorio < 8) {
        mosquito.className = 'mosquito2';
    } else {
        mosquito.className = 'mosquito3';
    }
}

//criação do mosquito html
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosquito.png';
tamanhoMosquito();
mosquito.style.left = posicaoX + 'px';
mosquito.style.top = posicaoY + 'px';
mosquito.style.position = 'absolute';

document.body.appendChild(mosquito);

