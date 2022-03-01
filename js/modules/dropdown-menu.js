import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = ['touchstart', 'click'];

    // define touchstart e click como argumento padrão de events caso o usuário não o defina.
    if (events === undefined)this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  // ativa o dropdown menu e ativa a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      [this.events].forEach((userEvent) => {
      menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init(){
    if(this.dropdownMenus.length){
       this.addDropdownMenusEvent()
    }  
    return this;
  }
  
}
