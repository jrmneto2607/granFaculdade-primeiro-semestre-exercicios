let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar(){
     tabuleiro = []
     board = document.getElementById('board')
     aviso = document.getElementById('aviso')
     jogador = 1

     for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }
     }

     console.table(tabuleiro)
     exibir()
}

function exibir(){
    let tabela = '<table cellpadding="10" border="1">'
    for(let i = 0; i < 3; i++){
        tabela +='<tr>'
        for(let j = 0; j < 3; j++){
            switch(tabuleiro[i][j]){
                case 1: marcador = "X"; break;
                case -1: marcador = "O"; break;
                default: marcador = '_'
            }
            tabela +='<td>'+marcador+'</td>'
        }
        tabela +='</tr>'
     }
    tabela +='</table>'

    board.innerHTML = tabela
}

function jogar(){

    

    linha = document.getElementById("linha").value - 1
    coluna = document.getElementById("coluna").value - 1

    if(tabuleiro[linha][coluna] == 0){
        aviso.innerHTML = "Vez do Jogador " + numeroJogador()
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? -1 : 1
        jogador++
    }else{
        aviso.innerHTML = "Este campo ja foi marcado. Jogue novamente."
    }



    console.table(tabuleiro)

    
    exibir()
    checar()
}

function checar(){
    for(let i = 0; i < 3; i++){
        soma = 0;
        soma_linha = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]
        soma_coluna = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]
        soma_d1 =  tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
        soma_d2 =  tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]
        if(soma_linha == 3 || soma_linha == -3 || soma_coluna == 3 || soma_coluna == -3 || soma_d1 == 3 || soma_d1 == -3 || soma_d2 == 3 || soma_d2 == -3){
            aviso.innerHTML = `O jogador ${numeroJogador()} ganhou!!!`
        }
    }
}

function numeroJogador(){
    return (jogador % 2) + 1
}