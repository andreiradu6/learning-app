



const sendDataToServer = async () => {
    let payload = {};
    payload.option1 = 'DOGS';
    payload.option2 = 'CURRENCY';
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload),
    };
        
    let response = await fetch ('/path',options);
    let responseData = await response.json();
    console.log('responseData path', responseData);
};

sendDataToServer();










// mobile version here
// MOBILE VERSION

// open menu slider 
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const closeMenu = document.getElementById('close-hamburger');
console.log(closeMenu);
hamburgerMenu.addEventListener('click', () => {
    console.log('clicked on hamburger');
    navLinksMobile.classList.add('widthGrowth');
    navLinksMobile.classList.remove('widthGrowthReverse');
    closeMenu.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});


// close menu slider
const closeHamburger = document.getElementById('close-hamburger');
closeHamburger.addEventListener('click', () => {
    console.log('close menu');
    navLinksMobile.classList.remove('widthGrowth');
    navLinksMobile.classList.add('widthGrowthReverse');
    closeMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
});

// close menu after user clicked on an menu-item
const navItemMobile = document.querySelectorAll('.nav-item-mobile');
navItemMobile.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navLinksMobile.classList.remove("widthGrowth");
        navLinksMobile.classList.add("widthGrowthReverse");
        closeMenu.style.display = "none";
        hamburgerMenu.style.display = "block";
    });
});