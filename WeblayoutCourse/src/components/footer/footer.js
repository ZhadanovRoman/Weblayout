import Component from '../../app/js/base/component';
import Inputmask from 'inputmask';
class Footer extends Component {
    nameInput;
    phoneInput;
    footerSubmitBtn;
    nameLabel;
    constructor(element) {
        super(element);
        this.nameLabel = this.getElement('top-label-name')
        this.nameInput = this.getElement('top-inpt-name');
        this.nameInput.addEventListener('input', this.inptNameValid.bind(this))
        this.footerSubmitBtn = this.getElement('top-btn');
        this.phoneInput = this.getElement('top-inpt-phone');
        Inputmask({ mask: "+7 (999) 999-99-99" }).mask(this.phoneInput);
        this.footerSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.nameInput.value = '';
            this.phoneInput.value = '';
            this.nameLabel.textContent = '';
            this.nameInput.classList.remove('footer-inpt-err');
        });

    }

    inptNameValid = () => {

        if (!/^[a-zA-Z]+$/.test(this.nameInput.value)) {
            this.nameLabel.textContent = 'Недопустимый формат';
            this.nameInput.classList.add('footer-inpt-err')
        } else {
            this.nameLabel.textContent = '';
            this.nameInput.classList.remove('footer-inpt-err');
        }
    }

}
export default Footer