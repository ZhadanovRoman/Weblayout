import Component from '../../app/js/base/component';

import noUiSlider from 'nouislider';


class RangeSlider extends Component {
    slider;
    noUiSlider;
    inptLeft;
    inptRight;
    inptArr;
    btnReset;


    constructor(element) {
        super(element);
        
        this.btnReset = document.querySelector('.aside__reset-btn');
        this.inptLeft = document.querySelector('.aside__inpt-left');
        this.inptRight = document.querySelector('.aside__inpt-right');
        let inptArr = [this.inptLeft, this.inptRight]
        this.slider = this.root;

        noUiSlider.create(slider, {
            start: [1000, 9999],
            connect: true,
            range: {
                'min': 1000,
                'max': 9999
            }
        });


        this.slider.noUiSlider.on('update', function (values, handle) {
            inptArr[handle].value = Math.round(values[handle])
        })

        const setRengeSlid = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            this.slider.noUiSlider.set(arr)
        }
        this.btnReset.addEventListener('click', () => {
            setRengeSlid(0, 1000);
            setRengeSlid(1, 9999)
        });
        inptArr.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRengeSlid(index, e.currentTarget.value);
            });
        });
    }

    btnResetClick = () => {
        console.log('44444')
        this.marker = false;
        this.setRengeSlid(null, null)
    }

}

export default RangeSlider