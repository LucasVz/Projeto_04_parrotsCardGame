  let quantidadeCartas;
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
  viraVerso.classList.toggle("ativar-verso");
  const viraFrente = carta.querySelector(".carta .frente-carta");
  viraFrente.classList.toggle("ativar-frente");
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
  <div class="carta" onclick="VirarCarta(this)" data-identifier="carta">
    <div class="verso-carta" data-identifier="front-face">
      <img src="./imgs/front.png" alt="carta">
    </div>

    <div class="frente-carta" data-identifier="back-face">
      <img src="./imgs/${copiaImagens[i]}.gif" alt="carta">
    </div>
  </div> 
  `;
  }

}
qualQuantidadeCartas();
adicionarCartas();
imagens.sort(comparador);