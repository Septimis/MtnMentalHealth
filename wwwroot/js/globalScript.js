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

//Function to create pop up info box
document.getElementById('cannabis-qualifying-conditions').addEventListener('click', () => {
    const infoBox = document.createElement('div');
    infoBox.classList.add('infoBox');

    const infoBoxHeader = document.createElement('h1');
    infoBoxHeader.classList.add('infoBoxHeader');
    infoBoxHeader.innerText = 'Qualifying Conditions';
    infoBox.appendChild(infoBoxHeader);

    const infoList = document.createElement('ul');

    const infoListPoints = [`Before your visit, please create a Utah.gov profile which is required to obtain a medical marijuana card at <a href="id.utah.gov">id.utah.gov</a>.`, `Once you complete this process, log out of the site and check your email for a verification code.`, `Once you have your verification code log onto <a href="evs.utah.gov">evs.utah.gov</a> and click on <code>TRACKING INBOX → NEW PATIENT</code> and complete the new patient registration form <i>(There is a $15 dollar processing fee required by the state of Utah that you pay after meeting with a QMP)</i>`, `After finishing the registration form click save and submit and it will show that you are awaiting certification. We will review your registration during your visit.`, `We can also assist you over the phone or in person with the entire online state application process.`, `Medical marijuana cards are good for one year and can be renewed by phone. We will send an email reminder before your card expires.`];
    for(let i = 0; i < infoListPoints.length; i++) {
        const point = document.createElement('li');
        point.classList.add('infoPoint');
        point.innerHTML = infoListPoints[i];
        infoList.appendChild(point);
    }
    infoBox.appendChild(infoList);

    const exitBtn = document.createElement('button');
    exitBtn.innerText = 'Close';
    exitBtn.classList.add('button');
    exitBtn.style.backgroundColor = 'var(--mental-teal)';
    exitBtn.style.margin = '0px auto';
    exitBtn.addEventListener('click', () => {
        document.body.removeChild(infoBox);
    });
    infoBox.appendChild(exitBtn);

    document.body.appendChild(infoBox);
});