const servicesDropDown = document.getElementById('servicesDropDownWrapper');
const servicesLink = document.getElementById('servicesLink');

//Manually set the 'Left' property of the dropdown menu
servicesDropDown.style.left = Number(servicesLink.offsetLeft).toString() + 'px';

//Functionality for hamburger menu
const hamburger = document.getElementById('hamburger');
const linkWrapper = document.getElementById('linkWrapper');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    linkWrapper.classList.toggle('active');
});