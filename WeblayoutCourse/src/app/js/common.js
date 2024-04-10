import Footer from '../../components/footer/footer';
import Main from '../../components/main/main';
import Header from '../../components/header/header';
import HeaderNav from '../../components/header-nav/header-nav';

/**
 * Объект со всеми компонентами, для которых будет применяться автоматическая инициализация
 * Ключ объекта - Название компонента, которое было указано во время его создания (совпадает с именем файлов)
 * Значение - JS-класс компонента (Импорт добавляется вручную)
 */

const allComponents = {
    'header-nav' : HeaderNav,
    'header': Header,
    'main': Main,
    'footer': Footer
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
/*
document.addEventListener('DOMContentLoaded',()=>{
    fetch('/stats')
           .then(res => res.json())
           .then(data =>{ 
            localStorage.setItem('statData',JSON.stringify(data)),
            localStorage.setItem('checkCount',JSON.stringify(1))
        } )

})
*/
