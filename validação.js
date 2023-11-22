function verificaChute(chute){
    const numero = +chute

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou<h2>
        <h3>O número secreto é ${numeroSecreto}<h3>

        <button class="restart_btn" id="restartBtn">Jogar novamente<button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down fa-bounce"></i></div>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up fa-bounce"></i></div>
        `
    }

}

function numeroInvalido(numero){
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e =>{
    if(e.target.id == "restartBtn"){
        window.location.reload()
    }
})


