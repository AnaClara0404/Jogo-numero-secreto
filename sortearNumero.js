const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}


const menorElemento = document.getElementById('valor_menor')
menorElemento.innerHTML = menorValor

const maiorElemento = document.getElementById('valor_maior')
maiorElemento.innerHTML = maiorValor