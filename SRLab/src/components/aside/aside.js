
import Component from '../../app/js/base/component';

class Aside extends Component {
    sizeBlock;
    constructor(element) {
        super(element);
        
            this.sizeBlock = this.getElements('size-check')
        
        

     this.sizeBlock.forEach((el)=>{
            el.addEventListener('click', this.sizeBlockClick)
        })
    }

    sizeBlockClick =(e)=>{
        e.target.classList.toggle('size-block-change')      
    }
    
}

export default Aside