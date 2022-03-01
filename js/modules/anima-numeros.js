export default class AnimaNumeros {
  constructor(numeros,observerTarget, observerClass){
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do this.handleMutation (callback da mutação)
    this.handleMutation = this.handleMutation.bind(this)
  }

  // recebe um elemento do Dom com número em seu texto.
  // incrementa de zero até o númefo final
  static incrementarNumero(numero){
    const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
          if (start > total) {
            numero.innerText = total;
            clearInterval(timer);
        }
      }, 25 * Math.random());
  }

  // ativa incrementar a partir do número que vem do dom
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  // função que aconteça quando uma mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adicona o mutationObserver para verificar quando a classe ativo é adicionada ao elemento target.
  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init(){
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver()
    }  
    return this;
  }
  
}
