/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //cuando hacemos click en nav__link , removemos la clase show-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if (sectionsClass) { // Verificar si sectionsClass no es null
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.