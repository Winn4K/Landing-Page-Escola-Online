const setaDireita = window.document.getElementById('seta-direita')
const setaEsquerda = window.document.getElementById('seta-esquerda')
const cardBruna = window.document.getElementById('bruna')
const cardLeonardo = window.document.getElementById('leonardo')

setaDireita.addEventListener('click', function() {
    setaDireita.style.display = "none";
    cardLeonardo.style.display = "none";
    cardBruna.style.display = "flex";
    setaEsquerda.style.display = "flex";
})

setaEsquerda.addEventListener('click', function() {
    setaDireita.style.display = "flex";
    cardLeonardo.style.display = "flex";
    cardBruna.style.display = "none";
    setaEsquerda.style.display = "none";
})