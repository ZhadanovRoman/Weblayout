let figures = document.querySelectorAll('.figure');
let animations = ['pulseAnimation', 'moveAnimation', 'rotateAnimation', 'transform3DAnimation'];
let count = 0;

figures.forEach((el) => {
    el.addEventListener('click', onFigureClick)
});

function onFigureClick() {

    if (!this.classList.contains('classMarker')) {// маркер первого нажатия
        count = 0;
        this.classList.add('classMarker');
        this.classList.add(animations[count]);
        count++;
    } else {
        if (count === 4) {

            count = 0;
            for (let i = 0; i < 4; i++) { // после 4го клика обнуляемся
                this.classList.remove(animations[i])
                this.classList.remove('classMarker')
            }
        } else {

            this.classList.add(animations[count]);
            count++;
        }
    }

}