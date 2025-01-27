const selectNivel = document.getElementById('nivel');
const selectButton = document.getElementById('iniciar');

selectNivel.addEventListener('change', function() {

    this.classList.remove('nivel1', 'nivel2', 'nivel3');
    selectButton.classList.remove('btn1', 'btn2', 'btn3');

    const nivelSelecionado = this.value;

    if (nivelSelecionado === 'normal'){
        this.classList.add('nivel1');
        selectButton.classList.add('btn1');

    } else if (nivelSelecionado === 'dificil') {
        this.classList.add('nivel2');
        selectButton.classList.add('btn2');

    } else if (nivelSelecionado === 'impossivel') {
        this.classList.add('nivel3');
        selectButton.classList.add('btn3');
    }

    if (nivelSelecionado === "") {
        this.classList.add('nivel');
        selectButton.classList.remove('btn1', 'btn2', 'btn3'); 
    }

});

function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    
    if (nivel === ''){
        alert('Selecione um nível para iniciar o jogo')
        return false;
    }
}