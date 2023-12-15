let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = document.querySelectorAll('.header-link');


burger.addEventListener('click',
function(){
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-nav--active');
  document.body.classList.toggle('.stop-scroll');
})

menuLinks.forEach( function(el){
  el.addEventListener('click',function(){
    burger.classList.remove('burger--active');
    menu.classList.remove('header-nav--active');
    document.body.classList.remove('.stop-scroll');


  })
})


const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  },
);

// tabs




document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    document.querySelector(`[data-targ="${path}"]`).classList.add('tabs-item--active');
    document.querySelector(`[data-tar="${path}"]`).classList.add('tabs-item--active');
    });
    });







 // search


      let search = document.querySelector('.input-search');
      let searchForm = document.querySelector('.form');
      let serchleft = document.querySelector('.label-serch');


      search.onclick = function() {
        searchForm.classList.toggle('form--active');
        serchleft.classList.toggle('label-serch--active');
     };



     new Accordion('.accordion-container');
