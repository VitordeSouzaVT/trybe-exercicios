let chessPiece = 'pé';

switch (chessPiece.toLocaleLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonal');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical');
    break;
  case 'cavalo':
    console.log('Cavalo - em L');
    break;
  case 'peao':
    console.log('apenas uma casa pra frente');
    break;
  case 'torre':
    console.log('linha reta');
    break;
  default:
    console.log('Erro, peça invalida');
};