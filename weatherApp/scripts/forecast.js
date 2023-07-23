const $byWeekBtn = document.querySelector('.forecast-by-week');
$byWeekBtn.tabIndex = 5; 
const $byHourBtn = document.querySelector('.forecast-by-hour');
$byHourBtn.tabIndex = 6;
const $cardsWeek = document.querySelector('.forecast-cards-week');
const $cardsHour = document.querySelector('.forecast-cards-hour');


$byHourBtn.addEventListener('click',()=>{
        $byWeekBtn.style.color = 'var(--hintAC)';
        $byWeekBtn.classList.remove('forecast-by-week__before');
        $byHourBtn.style.color = 'var(--gray48)';
        $byHourBtn.classList.add('forecast-nav-spanJS');
        $byWeekBtn.classList.remove('forecast-nav-spanJS');
           $cardsWeek.style.display = 'none';
        $cardsHour.style.display = 'flex';
})
$byWeekBtn.addEventListener('click',()=>{
        $byHourBtn.style.color = 'var(--hintAC)';
        $byWeekBtn.style.color = 'var(--gray48)';
        $byWeekBtn.classList.add('forecast-nav-spanJS');
        $byHourBtn.classList.remove('forecast-nav-spanJS');
             $cardsHour.style.display = 'none';
             $cardsWeek.style.display = 'flex';
})