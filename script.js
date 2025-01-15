//váriaveis de altura de largura globais
var altura = 0;
var largura = 0;

//definindo dimensões do jogo, variaveis recolhendo o tamanho atual da janela do navegador
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo();
window.addEventListener('resize', ajustarTamanhoPalcoJogo); //permite reajuste no tamanho da janela do navegador

//atribuindo uma classe aleatoria ao elemento (px do mosquito)
function tamanhoMosquito() {
    //gera um numero aleatório, para escolher uma das classes
    var tamanhoMosquitoAleatorio = Math.floor(Math.random() * 10);

    if (tamanhoMosquitoAleatorio >= 0 && tamanhoMosquitoAleatorio < 4) {
        return 'mosquito1';
    } else if (tamanhoMosquitoAleatorio >= 4 && tamanhoMosquitoAleatorio < 8) {
        return 'mosquito2';
    } else {
        return 'mosquito3';
    }
}

//atribuindo um lado aleatório para o mosquito
function ladoMosquito() {
    //gera um numero aleatório para escolher se utiliza a classe ladoB (que altera o lado da imagem)
    var ladoAleatorio = Math.floor((Math.random() * 10));

    return ladoAleatorio >= 0 && ladoAleatorio < 5 ? 'ladoB' : '';
}

//função para gerar uma posição aleatória para o mosquito
function gerarPosicao(max) {
    var posicao = Math.floor(Math.random() * max) - 90;
    return posicao < 0 ? 0 : posicao;
}

//criando o mosquito
function criarMosquito() {

    //removendo o mosquito anterior (caso exista)
    var mosquito = document.getElementById('mosquito');
    if (mosquito) {
        mosquito.remove();
    }
    
    //atribuindo as variaveis dos eixos, as posições aleatórias
    var posicaoX = gerarPosicao(largura);
    var posicaoY = gerarPosicao(altura);

    //criação do mosquito html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';

    //concatenando as classes
    var classeTamanho = tamanhoMosquito();
    var classeLado = ladoMosquito();
    mosquito.className = `${classeTamanho} ${classeLado}`.trim()

    //posicionando o mosquito
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    //adicionando o mosquito ao body
    document.body.appendChild(mosquito);
}

//gerando o mosquito a cada 1s
setInterval( () => {
    criarMosquito()
}, 1000);






