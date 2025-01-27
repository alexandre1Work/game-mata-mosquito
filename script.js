//váriaveis de altura de largura globais
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

//definindo dimensões do jogo, variaveis recolhendo o tamanho atual da janela do navegador
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth
}

ajustarTamanhoPalcoJogo();
window.addEventListener('resize', ajustarTamanhoPalcoJogo); //permite reajuste no tamanho da janela do navegador

//cronometro 
//exibindo o valor antes de entrar no setInerval
document.getElementById('cronometro').innerHTML = tempo;
var cronometro = setInterval(function() {
    
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro); // Para o cronômetro quando chega a 0
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);

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
    //se o usuario matar o mosquito ele não entra nessa lógica pq o mosquito n vai existir
    var mosquito = document.getElementById('mosquito');
    if (mosquito) {
        mosquito.remove();

        //se remover o anterior é pq não clicou, então, retira uma vida
        if (vidas > 3) {
            
            window.location.href = 'fim_de_jogo.html'

        } else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

            vidas++
        }
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

    mosquito.onclick = function () {
        this.remove()
    };

    //adicionando o mosquito ao body
    document.body.appendChild(mosquito);
}

//gerando o mosquito a cada 2s
var criaMosquito = setInterval( () => {
    criarMosquito()
}, 2000);






