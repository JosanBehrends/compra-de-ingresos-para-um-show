function comprar() {
    //Capturar tipo de ingresso
    let ingresso = document.getElementById('tipo-ingresso').value;
    //Capturar quantidade
    let qtd = parseInt(document.getElementById('qtd').value);
    //Subtrair da quantidade disponível
    let quantidadeIngressos = qtd > 1 ? 'ingressos' : 'ingresso';

    if (ingresso == 'pista') {
        comprarPista(qtd);
    } else if (ingresso == 'superior'){
        comprarSuperior(qtd)
    } else if (ingresso == 'inferior') {
        comprarInferior(qtd)
    }

    //Informar na tela, caso não tenha ingressos disponíveis, que não será possível realizar a compra
    if (quantidadeInferior <= 0 || quantidadeSuperior <= 0 || quantidadePista <= 0) {
        alert('A compra que você tentou fazer está indisponível.');
    }

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)
    if (qtd > qtdPista) {
        alert(`Quantidade indisponível! Só temos ${qtdPista} ingressos para Pista no momento.`)
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(`Você comprou ${qtd} ${quantidadeIngressos} para Pista!`);
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent)
    if (qtd > qtdSuperior) {
        alert(`Quantidade indisponível! Só temos ${qtdSuperior} ingressos para Cadeira Superior no momento.`)
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(`Você comprou ${qtd} ${quantidadeIngressos} para Cadeira Superior!`);
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent)
    if (qtd > qtdInferior) {
        alert(`Quantidade indisponível! Só temos ${qtdInferior} ingressos para Cadeira Inferior no momento.`)
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Você comprou ${qtd} ${quantidadeIngressos} para Cadeira Superior!`);
    }
} 
}