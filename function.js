  let quantidadeCartas;
  let contador = 0;

  function qualQuantidadeCartas(){
  quantidadeCartas = parseInt(prompt("insira um numero de 4 a 14"));
  while (quantidadeCartas < 4 || quantidadeCartas > 14 || isNaN(quantidadeCartas) || quantidadeCartas % 2 !== 0){
  quantidadeCartas = parseInt(prompt("insira um numero de 4 a 14"));
  }
 }

function comparador() { 
	return Math.random() - 0.5; 
}

function VirarCarta(carta){
  const viraVerso = carta.querySelector(".carta .verso-carta");
  viraVerso.classList.add("ativar-verso");
  const viraFrente = carta.querySelector(".carta .frente-carta");
  viraFrente.classList.add("ativar-frente");
  contador ++;
  console.log(contador);
  
  
  let compararCarta1;
  let compararCarta2;
  let v;

  if(contador === 1){
    compararCarta1 = carta.querySelector(".frente-carta");
    primeiroClick = compararCarta1.innerHTML;
  }
  if(contador === 2 ){
    compararCarta2 = carta.querySelector(".frente-carta");
    segundoClick = compararCarta2.innerHTML;
    contador = 0;

    if(primeiroClick === segundoClick){
      viraVerso.classList.remove("ativar-verso");
      viraFrente.classList.remove("ativar-frente");
      viraVerso.classList.add(".achou-par-verso");
      viraFrente.classList.add(".achou-par-frente");

    }
    else{
      intervalo = setTimeout(virarCartasDiferentes, 2000);
    }
    console.log(v);
  }
  
}

function virarCartasDiferentes(){
  const viraVerso = document.querySelectorAll(".carta .verso-carta");
  const viraFrente = document.querySelectorAll(".carta .frente-carta");
  for(let i = 0 ; i < quantidadeCartas; i++){
    viraFrente[i].classList.remove("ativar-frente");
    viraVerso[i].classList.remove("ativar-verso");
    console.log(i);
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
    <div class="verso-carta" data-identifier="front-face">
      <img src="./imgs/front.png" alt="carta">
    </div>

    <div class="frente-carta" data-identifier="back-face">
      <img class="${copiaImagens[i]}" src="./imgs/${copiaImagens[i]}.gif" alt="carta">
    </div>
  </div> 
  `;
  }

}


qualQuantidadeCartas();
adicionarCartas();
imagens.sort(comparador);