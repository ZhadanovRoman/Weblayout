
class Slider {
    constructor(urlArr) {
        this.urlArr = urlArr;
        this.count=0;
        this.slide = document.querySelector('.slider__slide-block');
      
        this.img = document.createElement('img');
        this.img.classList.add('slider__img')
        this.img.src = './image/turtle.jpg';
        this.slide.append(this.img)
   
        this.leftBtn = document.querySelector('.slider__leftBtn');
        this.rightBtn = document.querySelector('.slider__rightBtn');
        this.leftBtn.addEventListener('click', this.leftBtnClick.bind(this));

        this.rightBtn.addEventListener('click', this.rightBtnClick.bind(this))
    }
    
    leftBtnClick() {
     if(this.count===0){
        this.count = this.urlArr.length-1;
        this.img.src = this.urlArr[this.count];
     }else{
        this.count--
        this.img.src = this.urlArr[this.count];
     }
    }
    
    rightBtnClick () {
        if(this.count===2){
            this.count=-1;
            this.img.src = this.urlArr[this.count];
        }
        this.count++
        this.img.src = this.urlArr[this.count];
    }

   
}

const mySlider = new Slider(['./image/turtle.jpg', './image/movement.jpg', './image/volume.jpg']);
