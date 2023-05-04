/*Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.*/
let clientesTrybeBank = ['Vitor', 'Natasha', 'Gus'];

//Função 1 verificar se é string
let verificaçãoCliente = false;
function verificaString (cliente) {
  if (typeof cliente === 'string') {
    verificaçãoCliente = true;
    return 'Cliente válido! O parâmetro é uma string'
  }
else {
  return 'O parâmetro não é uma string!';
}
}
//Função 2 adicionar cliente
function adicionarCliente (cliente) {
  if (verificaçãoCliente == true) {
    clientesTrybeBank.push(cliente);
    return 'Cliente ' + cliente + ' adicionado com sucesso!';
  }
}

console.log(verificaString('Douglas'));
console.log(adicionarCliente('Douglas'));
console.log(clientesTrybeBank);