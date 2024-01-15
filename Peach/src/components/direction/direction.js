import Component from '../../app/js/base/component';

class Direction extends Component {
    arrow;
    item;
    paragraph;
    marker;
    dubleMarker;
    constructor(element) {
        super(element);

        this.arrow = this.getElements('accordArrow');
        this.item = this.getElements('item');
        this.paragraph = this.getElements('dscr')
        this.marker = false;
        this.dubleMarker = true;
        
        if (window.innerWidth <= 520) {
        for (let i = 0; i < this.arrow.length; i++) {

            this.item[i].addEventListener('click', () => {
               this.item.forEach((el)=>{
                   if(el.childNodes[1].classList.contains('paragraph-mrgn') && this.dubleMarker===false){
                        this.dubleMarker=true;
                        el.childNodes[0].childNodes[1].classList.remove('arrowRotate')
                        el.childNodes[1].style.maxHeight = null;
                        el.childNodes[1].classList.remove('paragraph-mrgn');
                  
                    }
                })
                if (this.marker === false ) {
                    this.arrow[i].classList.add('arrowRotate')
                    this.paragraph[i].style.maxHeight = this.paragraph[i].scrollHeight + 'px';
                    this.paragraph[i].classList.add('paragraph-mrgn');
                    this.marker=true;
                    this.dubleMarker=false;
                }else{
                    this.arrow[i].classList.remove('arrowRotate')
                    this.paragraph[i].style.maxHeight = null;
                    this.paragraph[i].classList.remove('paragraph-mrgn');
                    this.marker=false;
                }
            })
        }
        }
        // Your code here
    }


}

export default Direction