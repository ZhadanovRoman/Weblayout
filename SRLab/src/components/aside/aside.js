
import Component from '../../app/js/base/component';

class Aside extends Component {
    sizeBlock;
    btnReset;
    checkBox;
    constructor(element) {
        super(element);
        this.checkBox = document.querySelectorAll('.check-box__inpt');
        this.btnReset = this.getElement('reset-btn');

        this.sizeBlock = this.getElements('size-check');
        this.btnReset.addEventListener('click', this.btnResetClick)


        this.sizeBlock.forEach((el) => {
            el.addEventListener('click', this.sizeBlockClick)
        })
    }

    sizeBlockClick = (e) => {
        e.target.classList.toggle('size-block-change')
    }
    btnResetClick = () => {
        this.checkBox.forEach((el)=>{
            if(el.checked){
                el.checked = false;
            }
        })

        this.sizeBlock.forEach((el) => {
            if(el.classList.contains('size-block-change')){
                el.classList.remove('size-block-change')
            }
        })
    }

}

export default Aside