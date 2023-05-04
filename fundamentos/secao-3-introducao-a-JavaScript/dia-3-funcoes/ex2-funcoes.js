/*Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.*/
let clientesTrybeBank = ['Vitor', 'Natasha', 'Gus'];

//Função 1 Ver se é string
let verificaçãoCliente = false;
function verificaString(cliente) {
  if (typeof cliente === 'string') {
    verificaçãoCliente = true;
    return 'O parâmetro está correto';
  } else {
    return 'O parâmetro não é uma string';
  }
}

//Função 2 Ver se o cliente existe no array
let clienteEncontrado = false;
function buscaCliente(cliente){
  for (let index = 0; index < clientesTrybeBank; index += 1){
    if (cliente === clientesTrybeBank[index]) {
      clienteEncontrado = true
      return 'Cliente encontrado';
    } else {
      return 'Cliente não encontrado';
    }
  } 
}
//Função 3 excluir o cliente do array
function excluirCliente (cliente) {

}