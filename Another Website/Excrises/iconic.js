const filtersEl = document.querySelector('.filters');
const box1El1 = document.querySelector('.project:nth-chilf(1)');
const box1El2 = document.querySelector('.project:nth-chilf(2)');
const box1El3 = document.querySelector('.project:nth-chilf(3)');
const box1El4 = document.querySelector('.project:nth-chilf(4)');
const box1El5 = document.querySelector('.project:nth-chilf(5)');
const box1El6 = document.querySelector('.project:nth-chilf(6)');
const box1El7 = document.querySelector('.project:nth-chilf(7)');
const htmlEl = document.querySelector('html');

filtersEl.addEventListener('click', e => {
    fadeEl.style.opacity = '0'

    document.querySelector('.filter-btn--active').classList.remove('filter-btn-active')

    const filterText = e.target.textContent;

    if (filterText === 'All') {
        box1El1.style.opacity = '1';
        box1El1.style.transfom = 'scale(1)';
        box1El2.style.opacity = '1';
        box1El2.style.transfom = 'scale(1)';
        box1El3.style.opacity = '1';
        box1El3.style.transfom = 'scale(1)';
        box1El4.style.opacity = '1';
        box1El4.style.transfom = 'scale(1)';
        box1El5.style.opacity = '1';
        box1El5.style.transfom = 'scale(1)';
        box1El6.style.opacity = '1';
        box1El6.style.transfom = 'scale(1)';
        box1El7.style.opacity = '1';
        box1El7.style.transfom = 'scale(1)';
    }   else if (filterText === 'single song'){
        box1El2.style.opacity = '0';
        box1El2.style.transfom = 'scale(1)';
        box1El7.style.opacity = '0';
        box1El7.style.transfom = 'scale(1)';

        box1El1.style.transfom = 'translateX(-650px)'
        box1El1.style.opacity = '1';
    }
})