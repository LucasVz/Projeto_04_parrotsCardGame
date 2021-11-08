  let quantidadeCartas;
  let contador = 0;
  let compararCarta1;
  let compararCarta2;
  let compararCarta1Verso;
  let compararCarta2Verso;
  let contadorJogadas = 0;
  let contarPares = 0;

  function comparador() { 
    return Math.random() - 0.5; 
  }

  function qualQuantidadeCartas(){
  quantidadeCartas = parseInt(prompt("Insira um numero de 4 a 14 par"));
  while (quantidadeCartas < 4 || quantidadeCartas > 14 || isNaN(quantidadeCartas) || quantidadeCartas % 2 !== 0){
  quantidadeCartas = parseInt(prompt("Insira um numero de 4 a 14 par"));
  }
 }

function VirarCarta(carta){
  const viraVerso = carta.querySelector(".carta .verso-carta");
  viraVerso.classList.add("ativar-verso");
  const viraFrente = carta.querySelector(".carta .frente-carta");
  viraFrente.classList.add("ativar-frente");

  contador ++;
  contadorJogadas++;

  if(contador === 1){
    compararCarta1 = carta.querySelector(".frente-carta");
    compararCarta1Verso = carta.querySelector(".verso-carta");
    primeiroClick = compararCarta1.innerHTML;
    carta.classList.add("nao-clicavel-primeira-carta");
  }

  if(contador === 2){
    compararCarta2 = carta.querySelector(".frente-carta");
    compararCarta2Verso = carta.querySelector(".verso-carta");
    segundoClick = compararCarta2.innerHTML;
    if(primeiroClick === segundoClick){
      carta.classList.add("nao-clicavel");
      contarPares += 2;
      console.log(contarPares);
      setTimeout(ganharPartida, 200);
    }

    else{
      adicionarNaoClicavel()
      setTimeout(removerNaoClicavel, 1000);
      setTimeout(virarCartasDiferentes, 1000);
    }
    contador = 0;
  }
}

function virarCartasDiferentes(){
  compararCarta1.classList.remove("ativar-frente");
  compararCarta2.classList.remove("ativar-frente");
  compararCarta1Verso.classList.remove("ativar-verso");
  compararCarta2Verso.classList.remove("ativar-verso");

  let primeiraCarta = document.querySelectorAll(".carta");
  for(let i = 0; i < quantidadeCartas; i++){
    primeiraCarta[i].classList.remove("nao-clicavel-primeira-carta");
  }
}

function adicionarNaoClicavel(){
  for(let i = 0; i < quantidadeCartas; i++){
    let carta = document.querySelectorAll(".carta");
    carta[i].classList.add("nao-clicavel");
  }
}

function removerNaoClicavel(){
  for(let i = 0; i < quantidadeCartas; i++){
    let carta = document.querySelectorAll(".carta");
    carta[i].classList.remove("nao-clicavel");
  }
}

function adicionarCartas(){
  let copiaImagens;
  const cartas = document.querySelector(".cartas");
  imagens =[
    'bobrossparrot',
    'bobrossparrot',
    'fiestaparrot',
    'fiestaparrot',
    'explodyparrot',
    'explodyparrot',
    'metalparrot',
    'metalparrot',
    'revertitparrot',
    'revertitparrot',
    'tripletsparrot',
    'tripletsparrot',
    'unicornparrot',
    'unicornparrot'
  ];

  copiaImagens = imagens.slice(14 - quantidadeCartas);
  copiaImagens.sort(comparador)

  for(let i = 0; i < quantidadeCartas; i++){
  cartas.innerHTML += `
  <div class="carta" onclick="VirarCarta(this)" data-identifier="card">
    <div class="verso-carta" data-identifier="back-face">
      <img src="./imgs/front.png" alt="carta">
    </div>

    <div class="frente-carta" data-identifier="front-face">
      <img src="./imgs/${copiaImagens[i]}.gif" alt="carta">
    </div>
  </div> 
  `;
  }

}

function ganharPartida(){
  if(contarPares === quantidadeCartas){
    alert("Você ganhou em " + contadorJogadas + " jogadas!");
  }
}

qualQuantidadeCartas();
adicionarCartas();
imagens.sort(comparador);