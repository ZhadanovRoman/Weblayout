import Component from '../../app/js/base/component';

class Map extends Component {
  countMini = false;
  map;
  detailLocation;
  locationImgUrl;
  counter = 0;
  arrowRotate = false;
  officesArrow;
  detailNav;
  menuItem;
  detailItem;
  miniList;
  triangle;
  constructor(element) {
    super(element);
    this.map = this.root;
    this.shmap = document.querySelector('.shmap');

    this.locationClasses = ['mapAll', 'mapMSC', 'mapCenter',
      'mapNord-West', 'mapSouth', 'mapVolga', 'mapUral', 'mapSiberia',
      'mapEast']
    this.menuItem = document.querySelectorAll('.map__menu-item');
    this.detailItem = document.querySelectorAll('.map__detail-item');
    
    
      this.detailItem.forEach((el)=>{
        el.addEventListener('click', this.accordionDetailItem)
      })
   
    
    for (let i = 0; i < this.locationClasses.length; i++) {

      this.menuItem[i].addEventListener('click', () => {
        this.shmap.classList = `shmap ${this.locationClasses[i]}`;
      });
    }


    this.detailLocation = [[], [], ['Воронеж', 'Ярославль', 'Белгород'], ['Санкт-Петербург', 'Калининград'],
    ['Ростов-на-Дону', 'Краснодар', 'Волгоград'], ['Казань', 'Самара', 'Уфа', 'Оренбург', 'Нижний Новгород'],
    ['Екатеринбург', 'Челябинск', 'Пермь', 'Сургут', 'Тюмень', 'Ижевск'], ['Новосибирск', 'Омск', 'Томск', 'Красноярск', 'Иркутск'],
    ['Хабаровск', 'Владивосток']]
    this.detailList = document.querySelectorAll('.map__detail-item');

    if (this.detailList) {
      this.detailList.forEach(el => {
        let miniList = document.createElement('ul');
        miniList.classList.add('map__mini-list');
    
        let arrCitys = this.detailLocation[this.counter];
        this.counter++;
        arrCitys.forEach(elem => {

          let miniItem = document.createElement('li');
          miniItem.classList.add('map__mini-item');
          miniItem.textContent = elem;
          miniList.append(miniItem);
        })
        el.append(miniList);
     
      });
    }
    this.detailNav = this.getElement('detail-nav');

    this.officesArrow = this.getElement('arrow');
    this.officesArrow.addEventListener('click', this.officesOpen);

    this.mapHeaderMenu = this.getElement('nav-menu')
  }

  accordionDetailItem = (e) => {// выпадающий список при разрешении 320 
    if (window.innerWidth <= 520) {
      if (!this.countMini) {
        this.countMini = true;
        e.target.childNodes[2].style.maxHeight = e.target.childNodes[2].scrollHeight + 'px';
        e.target.childNodes[2].style.marginBottom = '15px';
        e.target.childNodes[1].classList.add('arrowRotate')
      } else {
        this.countMini = false;
        e.target.childNodes[2].style.maxHeight = null;
        e.target.childNodes[2].style.marginBottom = '0';
        e.target.childNodes[1].classList.remove('arrowRotate')
      }
    }
   
  }

  officesOpen = () => {
    this.officesArrow.classList.toggle('arrowRotate');
    this.detailNav.classList.toggle('deteilNavVisiblity');
    this.mapHeaderMenu.classList.toggle('nav-menu-visibility');
    this.shmap.classList.toggle('shmap-visibility')
  }
}

export default Map