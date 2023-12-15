import Component from '../../app/js/base/component';

class Map extends Component {
    count;
    map;
    detailLocation;
    locationImgUrl;
    counter=0;
    arrowRotate=false;
    officesArrow;
    detailNav;
    menuItem;
    constructor(element) {
        super(element);
           this.map = this.root
           this.locationClasses = ['mapAll','mapMSC','mapCenter',
           'mapNord-West','mapSouth','mapVolga','mapUral','mapSiberia',
           'mapEast']
        this.menuItem = document.querySelectorAll('.map__menu-item');
        
        for (let i=0; i<this.locationClasses.length; i++){
          console.log(this.locationClasses[i])
          this.menuItem[i].addEventListener('click', () => {
            this.map.classList = `map ${this.locationClasses[i]}`;
        });
         }
       

         this.detailLocation = [[],[],['Воронеж','Ярославль','Белгород'],['Санкт-Петербург','Калининград'],
         ['Ростов-на-Дону','Краснодар','Волгоград'],['Казань','Самара','Уфа','Оренбург','Нижний Новгород'],
         ['Екатеринбург','Челябинск','Пермь','Сургут','Тюмень','Ижевск'],['Новосибирск','Омск','Томск','Красноярск','Иркутск'],
         ['Хабаровск','Владивосток']]
         this.detailList = document.querySelectorAll('.map__detail-item');
        
         if(this.detailList){
         this.detailList.forEach(el=>{
            let miniList = document.createElement('ul');
            miniList.classList.add('map__mini-list');
          
           let arrCitys = this.detailLocation[this.counter];
            this.counter++;
           arrCitys.forEach(elem=>{
         
                let miniItem = document.createElement('li');
                miniItem.classList.add('map__mini-item');
                miniItem.textContent = elem;
                miniList.append(miniItem);
            })
            el.append(miniList);
            el.addEventListener('click', this.itemConsole);
           });
         }
          this.detailNav = this.getElement('detail-nav');

           this.officesArrow = this.getElement('arrow');
           this.officesArrow.addEventListener('click', this.officesOpen);
        }

        officesOpen = ()=> {
            this.officesArrow.classList.toggle('arrowRotate')
            this.detailNav.classList.toggle('deteilNavVisiblity')
        }
}

export default Map