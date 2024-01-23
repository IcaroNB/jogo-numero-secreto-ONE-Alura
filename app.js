let listaNumerosSorteados = [];
let qtdNumerosLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
mensagemInicial();
function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.1 });
}
function mensagemInicial() {
  exibirTextoTela("h1", "Jogo do Número Secreto");
  exibirTextoTela("p", "Escolha um número entre 1 e 100");
}


let tentativas = 1;
function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavra = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagem = `Você acertou o número secreto em ${tentativas} ${palavra}.`;
  if (chute == numeroSecreto) {
    exibirTextoTela("h1", "Acertou o número!");
    exibirTextoTela("p", mensagem);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoTela("p", `O número secreto é menor que ${chute}`);
    } else {
      exibirTextoTela("p", `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * qtdNumerosLimite + 1);
  let qtdElementos = listaNumerosSorteados.length;

  if (qtdElementos == qtdNumerosLimite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

