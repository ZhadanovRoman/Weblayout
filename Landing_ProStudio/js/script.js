lazyload()

let interv;

function jumpNumber(){
  let phone = document.querySelector('.header-btn');
  phone.classList.toggle('animate__bounce');
}

interv = setInterval(jumpNumber,2000);



// btn- more

const btnMore = document.querySelector('.gallery-btn-more');
const articleItem = document.querySelectorAll('.gallery-manik');

btnMore.addEventListener('click',() => {
    articleItem.forEach(el =>{ el.classList.add('articleItem--visible')});
    btnMore.closest('.gallery-btn').classList.add('gallery-btn--hidden');
})

const btnMore2 = document.querySelector('.gallery-btn-more2');
const articleItem2 = document.querySelectorAll('.gallery-eyebr');

btnMore2.addEventListener('click',() => {
    articleItem2.forEach(el =>{ el.classList.add('articleItem--visible')});
    btnMore2.closest('.gallery-btn2').classList.add('gallery-btn--hidden');
})


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let socialNetw = document.querySelector('.header-box-links');
let menuLinks = document.querySelectorAll('.header-item');

burger.addEventListener('click',
function(){
    socialNetw.classList.toggle('header-links--active')
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-nav--active');
  document.body.classList.toggle('.stop-scroll');
})

menuLinks.forEach( function(el){
  el.addEventListener('click',function(){
    socialNetw.classList.remove('header-links--active')
    burger.classList.remove('burger--active');
    menu.classList.remove('header-nav--active');
    document.body.classList.remove('.stop-scroll');


  })
})


// карта
let center = [44.589521, 33.460978];
function visib() {

    var myMap = new ymaps.Map("map", {
        center: center,
        zoom: 17,
        controls: []

    });

    var myPlacemark = new ymaps.Placemark(center, null,{
        iconLayout: 'default#image',
        iconImageHref: "img/Subtract.png",
        iconImageSize: [28, 40],
        iconImageOffset: [-15, -44]
    });
    myMap.geoObjects.add(myPlacemark);
    }
    ymaps.ready(visib)

/*val*/

    console.log('Init!');

    // inputmask
    const form = document.querySelector('.form');
    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
    
    new window.JustValidate('.form', {
      rules: {
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
      },
      colorWrong: '#ff0f0f',
      messages: {
        name: {
          required: 'Введите имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов'
        },
        email: {
          email: 'Введите корректный email',
          required: 'Введите email'
        },
        tel: {
          required: 'Введите телефон',
          function: 'Здесь должно быть 10 символов без +7'
        }
      },
      
      submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let orderBtn = document.querySelector('.order');
        orderBtn.style.background = 'green';
        orderBtn.textContent = 'Готово';
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
    
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
    
        thisForm.reset();
      }
    })

// ----






