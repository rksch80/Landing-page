// --------- Adds <li> items to the DOM ----------

const myList = document.getElementById('myList');
// new list item

let newListItem = document.createElement('li');
newListItem.innerHTML = `<a href="#section1">Rice</a>
<a href="#section2">Wheat</a>
<a href="#section3">Maize</a>
<a href="#section4">Sugar</a>`;

myList.appendChild(newListItem);


// ------------ Adds new section to DOM -------------


const newSec = document.getElementById('sections');
// new section item

let newSecItem = document.createElement('section3');
newSecItem.innerHTML = `
<section id="section4" data-nav="Section 4" class="your-active-class">
      <div class="landing__container">
        <h2>SUGAR</h2>
        <p>Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Table sugar, granulated sugar, or regular sugar, refers to sucrose, a disaccharide composed of glucose and fructose. By law in the United States sucrose is the only substance which can be called "sugar" on food labels.</p>
        <p>Simple sugars, also called monosaccharides, include glucose, fructose, and galactose. Compound sugars, also called disaccharides or double sugars, are molecules composed of two monosaccharides joined by a glycosidic bond. Common examples are sucrose (table sugar) (glucose + fructose), lactose (glucose + galactose), and maltose (two molecules of glucose). In the body, compound sugars are hydrolysed into simple sugars.</p>
      </div>
    </section>
`;

sections.appendChild(newSecItem);


// ------------responsive Navigation on smaller screens -----------

const navbarSwitch = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('#myList');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

navbarSwitch.addEventListener("click", navbarSwitchClick);

function navbarSwitchClick() {
    navbarSwitch.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    smoothScroll(event); //calls smooth scroll function found on line 41 when nav item is clicked
    if(navbarMenu.classList.contains("open")){ // closed navbar on smaller screens
        navbarSwitch.click();
    }
}

// script to create smooth scrolling for navigation

// *********** window.scrollInToView()**************
smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "body" : event.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



/// script for active navigation style scroll

window.addEventListener('scroll', event => {
    let nav = document.querySelector('.navbar__menu');
    
    (window.scrollY >= 1) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});


window.addEventListener('scroll', event => {
    let navLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
    
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});
