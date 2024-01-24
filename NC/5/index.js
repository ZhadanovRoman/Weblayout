    const changeElemBtn = document.querySelector('.elem__btn');
    const elementsArray = document.querySelectorAll('.elem');


    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    function changeVisibility() {
        elementsArray.forEach(el => {
            el.classList.toggle('display-none');
        });
    }

    const debouncedChangeVisibility = debounce(changeVisibility, 1000);

    changeElemBtn.addEventListener('click', ()=>{debouncedChangeVisibility()});

