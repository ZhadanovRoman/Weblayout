import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Aside from '../../components/aside/aside';
import Footer from '../../components/footer/footer';
import PhoneLink from '../../components/phone-link/phone-link';
import RangeSlider from '../../components/range-slider/range-slider';
import CheckBox from '../../components/check-box/check-box';
/**
 * Объект со всеми компонентами, для которых будет применяться автоматическая инициализация
 * Ключ объекта - Название компонента, которое было указано во время его создания (совпадает с именем файлов)
 * Значение - JS-класс компонента (Импорт добавляется вручную)
 */
const allComponents = {
    'check-box': CheckBox,
    'range-slider': RangeSlider,
    'header': Header,
    'main': Main,
    'aside': Aside,
    'footer': Footer,
    'phone-link': PhoneLink
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

