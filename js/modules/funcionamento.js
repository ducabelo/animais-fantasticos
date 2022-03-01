export default class Funcionamento {
  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }
  
  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horasAgora = this.dataAgora.getUTCHours() - 3;
  }
  
  estaAberto(){
    // ver se está aberto pelo dia da semana
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1; 
    // Como o horário de funcionamento está dentro de uma array, comparamos com o índice. horarioSemana[0] = 8, horarioSemana[1] = 18

    const horarioAberto =
      this.horasAgora >= (this.horarioSemana[0] && this.horasAgora < this.horarioSemana[1]);
      return semanaAberto && horarioAberto;
  }
  
  ativaAberto(){
    if (this.estaAberto()) {
      this.activeClass
    }  
  }
 
  init() {
    if (this.funcionamento){
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    };
    return this;
  }

}
