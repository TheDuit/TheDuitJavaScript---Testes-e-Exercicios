var player = 0;
var playerLabel = document.getElementById("jogador")

function squareChoser(evt){
    if((player % 2) == 0){
        playerLabel.innerText="Jogador 01";
        evt.currentTarget.style.background="#BF3C30";
        player++;
    }
    else{
        playerLabel.innerText="Player 02";
        evt.currentTarget.style.background="#9AEBA3";
        player--;
    }
    
}

var squares=window.document.getElementsByClassName('square'); //retorna uma coleção com os elementos da classe 
for (i=0; i < squares.length; i++){
    squares[i].addEventListener('click', squareChoser)
}
//var square =new Map(squares , addEventListener('click', squareChoser));//cast da coleção em um objeto Map, para poder usar o foreach



