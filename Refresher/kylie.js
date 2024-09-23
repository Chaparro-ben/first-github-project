const primaryHeader = document.querySelector('.primary-header');
const secondHeader = document.querySelector('.second-header_scroll-down');
const thirdHeader = document.querySelector('.third-header_scroll-down');
const scrollUp = document.querySelector('.ri-arrow-up-s-fill');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);


const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "100% 0px 0px 0px"}); 

navObserver.observe(scrollWatcher);//;//1st scroll animation header-BG text color

const Observer = new IntersectionObserver((entries) => {
    secondHeader.classList.toggle('stick', !entries[0].isIntersecting)
}, {rootMargin: "200% 0px 0px 0px"});

Observer.observe(scrollWatcher);//scroll animation 2

const thirdObserver = new IntersectionObserver((entries) => {
    thirdHeader.classList.toggle('sticky', !entries[0].isIntersecting)
}, {rootMargin: "390% 0px 0px 0px"});

thirdObserver.observe(scrollWatcher);

const scrollUpObserver = new IntersectionObserver((entries) => {
    scrollUp.classList.toggle('sr-up', !entries[0].isIntersecting)
}, {rootMargin: "4000px 0px 0px 0px"});

scrollUpObserver.observe(scrollWatcher);

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 650,
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-up', {delay:550, origin:'right'});