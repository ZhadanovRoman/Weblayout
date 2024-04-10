let container = document.querySelector('.card__container');
let btnMore = document.querySelector('.card__container-btn');

btnMore.addEventListener('click',(e)=>{
    getData('https://reqres.in/api/users?page=2'); // добавляем элементы следующего запроса
    e.target.disabled=true;
})
let majorArr=[];

async function getData(url) {
    const resp = await fetch(url ? url : 'https://reqres.in/api/users');
    const data = await resp.json();
    
    data.data.forEach(el=>{
         majorArr.push(el)
      }
    )
    sortData(majorArr)

} 
getData(); // получение данных, сортировка и отрисовка по умолчанию


function sortData(data) {
    data.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name)
    });
    renderCard(data)
}

function renderCard(arrData) {
    container.innerHTML='';// чистим контейнер при рендере

    let objValue = [];

    for (let i = 0; i < arrData.length; i++) {
        let card = document.createElement('ul');
        card.classList.add('card__list');
        objValue = Object.values(arrData[i])

        for (let k = 0; k < objValue.length; k++) {
            let item = document.createElement('li');
            item.textContent = objValue[k];
            item.classList.add('card__item');
            card.append(item);
        }
        container.append(card)
    }
}



