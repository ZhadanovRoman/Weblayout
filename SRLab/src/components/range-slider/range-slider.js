import Component from '../../app/js/base/component';

import noUiSlider from 'nouislider';


class RangeSlider extends Component {
    slider;
    noUiSlider;
    inptLeft;
    inptRight;
    inptArr;
    constructor(element) {
        super(element);

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
    }


}

export default RangeSlider