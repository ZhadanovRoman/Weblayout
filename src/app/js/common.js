import Compensation from '../../components/compensation/compensation';
import CorporateLife from '../../components/corporate-life/corporate-life';
import Direction from '../../components/direction/direction';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Main from '../../components/main/main';
import Map from '../../components/map/map';
import Mission from '../../components/mission/mission';
import About from '../../components/about/about';
import Gallery from '../../components/gallery/gallery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper',{
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

const allComponents = {
    'gallery': Gallery,
    'about': About,
    'compensation': Compensation,
    'corporate-life': CorporateLife,
    'direction': Direction,
    'header': Header,
    'hero': Hero,
    'main': Main,
    'map': Map,
    'mission': Mission
};
 
/**
 * Инициализация всех компонентов на странице
 */
try {
    const existedComponents = Array.from(document.querySelectorAll('[data-component]'));

    const components = existedComponents.map((component) => {
        try {
            return new allComponents[component.dataset.component]({
                name: component.dataset.component,
                component: component,
            });
        } catch (e) {
            console.error(`Ошибка во время инициализации компонента: ${component.dataset.component}\n\n${e}`);
        }
    });
} catch (e) {
    console.error(e);
}

document.addEventListener('DOMContentLoaded',()=>{
    fetch('/stats')
           .then(res => res.json())
           .then(data =>{ 
            localStorage.setItem('statData',JSON.stringify(data)),
            localStorage.setItem('checkCount',JSON.stringify(1))
        } )

})

