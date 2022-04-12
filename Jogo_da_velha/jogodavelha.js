var player = '1';
var playerLabel = document.getElementById("jogador")

function squareChoser(evt){
    if(player == '1'){
        var evento = evt.currentTarget;
        playerLabel.innerText="Jogador 02";
        evento.style.background="#BF3C30"; //currentTarget pega o elemento no qual o evento foi disparado, nao precisa mandar o elemento como argumento na chamada da função
        evento.style.color = "#ffffff"
        evento.innerText='X';
        player='2';
    }
    else{
        var evento = evt.currentTarget;
        playerLabel.innerText="Jogador 01";
        evento.style.background="#9AEBA3";
        evento.style.color = "#ffffff"
        evento.innerText='O';
        player='1';
    }   
}
var squares=window.document.getElementsByClassName('square'); //retorna uma coleção com os elementos da classe square
for (i=0; i < squares.length; i++){ //um for para percorrer os elementos da coleção 
    squares[i].addEventListener('click', squareChoser) //adicionando eventlisteners nos elementos da coleção
}



