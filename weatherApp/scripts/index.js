const $section = document.querySelector('.sideP');
const $sidePanelContainer = document.querySelector('.sideP-container');
const $sidePanelBtn = document.querySelector('.sideP-btn');

const sidePanelContainer = document.createElement('div');
sidePanelContainer.classList.add('sideP-second-container');
$section.append(sidePanelContainer)

const sidePanelCloseBlock = document.createElement('div');
sidePanelCloseBlock.classList.add('sideP-close-block');
sidePanelCloseBlock.tabIndex = 2;

const sidePanelClose = document.createElement('span');
sidePanelClose.classList.add('sideP-btn-close');
const sidePanelClose2 = document.createElement('span');
sidePanelClose2.classList.add('sideP-btn-close2')
sidePanelCloseBlock.append(sidePanelClose,sidePanelClose2);

const sidePanelInput = document.createElement('input');
sidePanelInput.tabIndex = 3;
sidePanelInput.classList.add('sideP-input');

const sidePanelBtnSearch = document.createElement('button');
sidePanelBtnSearch.tabIndex = 4;
sidePanelBtnSearch.classList.add('sideP-btn-search');
sidePanelBtnSearch.textContent = 'Найти';

const sidePanelSearchBlock = document.createElement('div');
sidePanelSearchBlock.classList.add('sideP-search-block');

sidePanelSearchBlock.append(sidePanelInput,sidePanelBtnSearch)
sidePanelContainer.append(sidePanelCloseBlock,sidePanelSearchBlock)

let timer



$sidePanelBtn.addEventListener('click',()=>{  
       clearTimeout(timer);
       
        sidePanelContainer.style.left = '0px';
        sidePanelContainer.style.visibility='visible';
})

sidePanelCloseBlock.addEventListener('click',()=>{
        sidePanelContainer.style.left = '-460px';
      timer = setTimeout(()=>{sidePanelContainer.style.visibility='hidden'},500)
})
/////////////////////////////////////

