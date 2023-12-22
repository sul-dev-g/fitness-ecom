const xMenu = document.getElementById('x-menu');
const menu = document.getElementById('menu');
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownHeading = document.getElementsByClassName('dropdown-heading');
const dropdownLinks = document.getElementsByClassName('dropdown-links');

// Function to execute when hamburger menu is clicked
hamburgerMenu.addEventListener("click", () => {

    // Hide hamburgerMenu - When the hamburgerMenu is clicked, create a style rule of display none

    hamburgerMenu.style.display = "none";
    
    // Show X mark - Whilst the hamburgerMenu is hidden, replace the prewritten style rule on the xMenu from display none to display block

    xMenu.style.display = "block";

    // Show mobile menu links when hamburger menu is clicked
    
    menu.style.display = "flex"
    menu.classList.add('show-mobile-menu');
})

// Function to execute when the X menu is clicked
xMenu.addEventListener("click", () => {

    // Hide xMenu - When the xMenu is clicked, create a style rule of display none

    xMenu.style.display = "none";

    // Show hamburgerMenu - Whilst the xMark is hidden, replace the style rule on the hamburgerMenu from display none to display block

    hamburgerMenu.style.display = "block";

    // Hide menu when xMenu is clicked
    menu.style.display = "none";
})