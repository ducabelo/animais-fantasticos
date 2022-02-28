export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horasAgora = dataAgora.getHours();

  // ver se está aberto pelo dia da semana
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  // Como o horário de funcionamento está dentro de uma array, comparamos com o índice. horarioSemana[0] = 8, horarioSemana[1] = 18

  const horarioAberto =
    horasAgora >= horarioSemana[0] && horasAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  console.log(horarioAberto);
}
