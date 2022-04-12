var player = 0;
var playerLabel = document.getElementById("jogador")

function squareChoser(evt){
    if((player % 2) == 0){
        playerLabel.innerText="Jogador 02";
        evt.currentTarget.style.background="#BF3C30"; //currentTarget pega o elemento no qual o evento foi disparado, nao precisa mandar o elemento como argumento na chamada da função
        player++;
    }
    else{
        playerLabel.innerText="Jogador 01";
        evt.currentTarget.style.background="#9AEBA3";
        player--;
    }
    
}

var squares=window.document.getElementsByClassName('square'); //retorna uma coleção com os elementos da classe square
for (i=0; i < squares.length; i++){ //um for para percorrer os elementos da coleção 
    squares[i].addEventListener('click', squareChoser) //adicionando eventlisteners nos elementos da coleção
}
//var square =new Map(squares , addEventListener('click', squareChoser));//cast da coleção em um objeto Map, para poder usar o foreach



