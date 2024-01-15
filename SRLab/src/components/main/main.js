import HeartGreen from '../../assets/images/HeartGreen.svg';
import HeartFirst from '../../assets/images/HeartFirst.svg';
import Component from '../../app/js/base/component';

class Main extends Component {
    heroList;
    itemTitle;
    itemPrice;
    itemClothingSize;
    itemArticle;
    item;
    itemPriceBlock;
    itemDiscount;
    itemSecondPrice;
    itemBtn;
    itemDescr;
    secondPriceValue;
    greenHeart;
    heart;
    basketBtnCount;
    dataObj = {
        title: 'Халат медицинский женский',
        article: 'артикул: 0272/3УК',
        size: 'размеры в наличии: 42-56',
        clothingSize: 'размеры в наличии: 42-56',
        price: {
            numb: 7980,
            value: '₽'
        },
        discount: 50
    }

    constructor(element) {
        super(element);


        this.heroList = this.getElement('hero-list');

        for (let i = 0; i < 16; i++) {
            this.heart = document.createElement('img');
            this.heart.src = HeartFirst;
            this.heart.classList.add('main__item-heart-first');

            this.greenHeart = document.createElement('img');
            this.greenHeart.classList.add('main__item-heart-green');
            this.greenHeart.src = HeartGreen;
            this.greenHeart.addEventListener('click', this.heartClick.bind(this))

            this.item = document.createElement('li');
            this.item.classList.add('main__hero-item');

            this.itemDescr = document.createElement('div');
            this.itemDescr.classList.add('main__item-dscr');

            this.itemTitle = document.createElement('h4');
            this.itemTitle.classList.add('main__item-title');
            this.itemTitle.textContent = this.dataObj.title;

            this.itemArticle = document.createElement('span');
            this.itemArticle.classList.add('main__item-article');
            this.itemArticle.textContent = this.dataObj.article;

            this.itemClothingSize = document.createElement('span');
            this.itemClothingSize.classList.add('main__item-clothingSize');
            this.itemClothingSize.textContent = this.dataObj.clothingSize;

            this.itemPrice = document.createElement('span');
            this.itemPrice.classList.add('main__item-price');
            this.itemPrice.textContent = (this.dataObj.price.numb + this.dataObj.price.value).substring(0, 1) + ' ' + (this.dataObj.price.numb + this.dataObj.price.value).substring(1);

            this.itemPriceBlock = document.createElement('div');
            this.itemPriceBlock.classList.add('main__item-price-block');


            this.itemBtn = document.createElement('button');
            this.itemBtn.classList.add('main__item-btn');
            this.itemBtn.textContent = 'добавить в корзину';
            this.itemBtn.addEventListener('click', this.itemBtnClick.bind(this))

            if (this.dataObj.discount) {

                this.itemSecondPrice = document.createElement('span');
                this.itemSecondPrice.classList.add('main__item-second-price');
                this.secondPriceValue = (this.dataObj.price.numb / 100) * this.dataObj.discount;
                this.itemSecondPrice.textContent = (this.secondPriceValue + this.dataObj.price.value).substring(0, 1) + ' ' + (this.secondPriceValue + this.dataObj.price.value).substring(1);

                this.itemDiscount = document.createElement('span');
                this.itemDiscount.classList.add('item-price-color');
                this.itemDiscount.textContent = this.dataObj.discount + '%';
                this.itemPrice.classList.add('item-price-crossedOut');

                this.itemPriceBlock.append(this.itemSecondPrice, this.itemPrice, this.itemDiscount);
            } else {
                this.itemPriceBlock.append(this.itemPrice);
            }
            this.itemDescr.append(this.itemTitle, this.itemArticle, this.itemClothingSize, this.itemPriceBlock, this.itemBtn);
            this.item.append(this.greenHeart, this.heart, this.itemDescr);
            this.heroList.append(this.item);
        }


    }
    heartClick = (e) => {

        e.target.classList.toggle('opacity1')
    }

    itemBtnClick = (e) => {
        if(e.target.textContent==='добавить в корзину'){
            this.basketBtnCount = 1;
            e.target.classList.add('itemBtnChange');
            e.target.textContent = this.basketBtnCount++;
        }else{
            this.basketBtnCount = Number(e.target.textContent);
            this.basketBtnCount++;
            e.target.textContent = this.basketBtnCount;
        }
        
    }

}

export default Main;

