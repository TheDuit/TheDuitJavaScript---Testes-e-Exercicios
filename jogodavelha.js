var player = '1';
var playerLabel = document.getElementById("jogador");
var squares=window.document.getElementsByClassName('square'); //retorna uma coleção com os elementos da classe square
var restart = document.getElementById('reiniciar')
restart.addEventListener('click', refresh);

for (i=0; i < squares.length; i++){ //um for para percorrer os elementos da coleção 
    squares[i].addEventListener('click', squareChoser);} //adicionando eventlisteners nos elementos da coleção

function squareChoser(evt){
    if(player == '1'){
        var evento = evt.currentTarget;
        playerLabel.innerText="Jogador 02";
        evento.style.background="#BF3C30"; //currentTarget pega o elemento no qual o evento foi disparado, nao precisa mandar o elemento como argumento na chamada da função
        evento.style.color = "#ffffff";
        evento.innerText='X';
        gameRuner(player);
        player='2';
    }
    else{
        var evento = evt.currentTarget;
        playerLabel.innerText="Jogador 01";
        evento.style.background="#9AEBA3";
        evento.style.color = "#ffffff";
        evento.innerText='O';
        gameRuner(player);
        player='1';
    };   
};


function checkEndGame(a,b,c, jogador){
    if (squares[a].innerHTML !== '-')
    {
        if (squares[a].innerHTML == squares[b].innerHTML && squares[a].innerHTML == squares[c].innerHTML)
        vencedor.style.visibility="visible";
        vencedor.innerText=`jogador ${jogador} venceu.`;
    }
        
    else{
        return;
    };
};

function refresh(){
    document.location.reload();
};

function gameRuner(player){
    
    checkEndGame(0,1,2, player);
    checkEndGame(3,4,5, player);
    checkEndGame(6,7,8, player);
    checkEndGame(0,3,6, player);
    checkEndGame(1,4,7, player);
    checkEndGame(2,5,8, player);
    checkEndGame(2,4,6, player);
    checkEndGame(0,4,8, player);
}

