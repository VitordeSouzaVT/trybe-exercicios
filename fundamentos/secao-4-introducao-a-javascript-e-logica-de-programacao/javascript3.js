let note = 120;

if (note < 0 || note > 100) {
  console.log('Erro, nota inválida');
} else if (note >= 90) {
  console.log('Conceito A');
} else if (note >= 80 && note < 90) {
  console.log('Conceito B');
} else if (note >= 70 && note < 80) {
  console.log('Conceito C');
} else if (note >= 60 && note < 70) {
  console.log('Conceito D');
} else if (note >= 50 && note < 60) {
  console.log('Conceito E');
} else {
  console.log('Conceito F');
};