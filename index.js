const menu = document.getElementById('menu-');
const button= document.getElementById('menu-icon');
const closebtn = document.getElementById ('closed');

const popupmobile = document.getElementById('popupmobile');
const closepopup= document.getElementById('popupclosemobile');
const popupdesk= document.getElementById('popupdesk');
const buttonpopupdesk= document.getElementById('desk-button');
const closepopupdesk= document.getElementById('close-desk-');

const workid = document.querySelector('#works-');
const worksection = document.querySelector('.mob-html');
const worksectiondesk = document.querySelector('.desk-html');

//Applying HTML for mobile cards
worksection.innerHTML = `
<div class="featured-mob">
<div class="img"> </div>
<div class="img-deskt"><img src="./Images/desk-img.png" id="img-deskt" alt=""> </div>
<div class="block">
    <div class="multi"> Multi-Post Stories </div>
    <div class="sup">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</div>
</div>
<ul class="textblock-tags">
  <li>css</li>
  <li>html</li>
  <li>bootstrap</li>
  <li>Ruby</li>
</ul>
<button class="smallbutton-mob">See Project</button>
</div>
      <div class="frame43">
        <div class="content-defaults content1">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#" >See Project</a>
        </div>
        <div class="content-defaults content2">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#" >See Project</a>
        </div>
        <div class="content-defaults content3">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#" >See Project</a>
        </div>
        <div class="content-defaults content4">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#" >See Project</a>
        </div>
        <div class="content-defaults content5">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#toolbar-" >See Project</a>
        </div>
        <div class="content-defaults content6">
          <h2 class="other-content-title">Profesional Art Printing Data</h2>
          <p class="other-content-description">A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard</p>
          <ul class="other-content-tags">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
          </ul>
          <a class="other-content-link" id="project" href="#toolbar-" >See Project</a>
        </div>
      
        
        `;

//Applying interaction to mobile menu
button.onclick = function() {
  menu.style.display = 'block';
}

closebtn.onclick = function() {
  menu.style.display = 'none';
}

menu.onclick = function() {
  menu.style.display = 'none';
}
 
 // Create new array of objects for mobile
 const cardDetails = [
  {
    id: 0,
    title: 'Todo List Project',
    desc: "This is a minimal to-do list used to organize your daily schedule. The system also helps to mark and unmark the completion progress of your daily tasks. It is done for educational purposes.",
    tecnologies: {
      tech1: 'html',
      tech2: 'JavaScript',
      tech3: 'Css',
    },
    live: 'https://talha-hanif5666.github.io/Todo-list-new/dist/',
    source: 'https://github.com/Talha-Hanif5666/Todo-list-new',
    img: './Images/3.png',
  },
  {
    id: 1,
    title: 'Web Development Global Summit',
    desc: "Web Development Course is my HTML, CSS, and JS capstone project. It is about a web development course where people can visit the site to learn more about it and invite others." ,
    tecnologies: {
      tech1: 'html',
      tech2: 'JavaScript',
      tech3: 'Css',
    },
    live: 'https://talha-hanif5666.github.io/Final-project/',
    source: 'https://github.com/Talha-Hanif5666/Final-project',
    img: './Images/2.png',
  },
  {
    id: 2,
    title: 'RENTCAR Web App',
    desc: "RENTCAR is a collaborative project, it's about luxury car rental platform built with Rails and React. Users can browse and reserve available models, manage reservations, and contribute by adding or deleting cars. It offers a seamless experience for renting luxury cars with ease." ,
    tecnologies: {
      tech1: 'React',
      tech2: 'Rails',
      tech3: 'Ruby',
    },
    live: 'https://capstone-rails.onrender.com/login',
    source: 'https://github.com/Talha-Hanif5666/capstone-rails',
    img: './Images/Rent-car.png',
  },
  {
    id: 3,
    title: 'Budget App',
    desc: "Budget App is an application that One can create categories for all their transaction, view total cost of all categories, view the cost of one transaction." ,
    tecnologies: {
      tech1: 'Ruby',
      tech2: 'Ruby on Rails',
      tech3: 'Css',
    },
    live: 'https://ror-capstone-project.onrender.com/',
    source: 'https://github.com/Talha-Hanif5666/Budget-App',
    img: './Images/budget-app.png',
  },
  {
    id: 4,
    title: 'Awesome books Project',
    desc: "Awesome books Project is about creating a library of books. where a user can add a book title and author or delete it." ,
    tecnologies: {
      tech1: 'html',
      tech2: 'React',
      tech3: 'JavaScript',
    },
    live: 'https://talha-hanif5666.github.io/Awesomebooks-new/',
    source: 'https://github.com/Talha-Hanif5666/Awesomebooks-new',
    img: './Images/Todo.PNG',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desktop-popup.png',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desktop-popup.png',
  }
];

// Create pop up section for mob
const workdetailsSection = (content) => `
<div class="pop-up-header" id="popupclosemobile">
        <span class="mobileclose">&times;</span>
        <h2>${cardDetails[content].title}</h2>
      </div>
      <div>
        <ul class="pop-up-tags">
          <li>${cardDetails[content].tecnologies.tech1}</li>
          <li>${cardDetails[content].tecnologies.tech2}</li>
          <li>${cardDetails[content].tecnologies.tech3}</li>
        </ul>
      </div>
      <div class="mobile-popup-img">
      <img src="${cardDetails[content].img}" alt="popup-img.png">
      </div>
      <div class="popup-description">
        <p>${cardDetails[content].desc}</p>
      </div>
      <div class="popup-buttons">
      <a href="${cardDetails[content].live}" id="see-live">See Live <img src="./Images/mob-popup.png"></a>
      <a href="${cardDetails[content].source}" id="see-source"> See Source <img src="./Images/pop-icon-github.png"></a>  
      </div>
`;

const details = document.querySelectorAll('#project');

// Create pop-up section for mobile
details.forEach((detail) => {
  detail.addEventListener('click', (event) => {
    event.preventDefault();
    let div = document.createElement('div');
    div.classList.add("pop-up-mobile");
    div.setAttribute("id", "popupmobile");
    const index = Array.from(detail.parentNode.parentNode.children).indexOf(detail.parentNode);
    div.innerHTML = workdetailsSection(index);
    let container = document.querySelector('.popmobdiv');
    container.appendChild(div);
    const closedetails = document.querySelector('.mobileclose');
    closedetails.addEventListener('click', () => {
      container.removeChild(div);
    });
  });
});


// Create caard section for desktop
const deskcardDetails = [
  {
    id: 0,
    title: 'Todo List Project',
    desc: "This is a minimal to-do list used to organize your daily schedule. The system also helps to mark and unmark the completion progress of your daily tasks. It is done for educational purposes.",
    tecnologies: {
      tech1: 'html',
      tech2: 'JavaScript',
      tech3: 'Css',
    },
    live: 'https://talha-hanif5666.github.io/Todo-list-new/dist/',
    source: 'https://github.com/Talha-Hanif5666/Todo-list-new',
    img: './Images/3.png',
  },
  {
    id: 1,
    title: 'Web Development Global Summit',
    desc: "Web Development Course is my HTML, CSS, and JS capstone project. It is about a web development course where people can visit the site to learn more about it and invite others." ,
    tecnologies: {
      tech1: 'html',
      tech2: 'JavaScript',
      tech3: 'Css',
    },
    live: 'https://talha-hanif5666.github.io/Final-project/',
    source: 'https://github.com/Talha-Hanif5666/Final-project',
    img: './Images/2.png',
  },
  {
    id: 2,
    title: 'RENTCAR Web App',
    desc: "RENTCAR is a collaborative project, it's about luxury car rental platform built with Rails and React. Users can browse and reserve available models, manage reservations, and contribute by adding or deleting cars. It offers a seamless experience for renting luxury cars with ease." ,
    tecnologies: {
      tech1: 'React',
      tech2: 'Rails',
      tech3: 'Ruby',
    },
    live: 'https://capstone-rails.onrender.com/login',
    source: 'https://github.com/Talha-Hanif5666/capstone-rails',
    img: './Images/Rent-car.png',
  },
  {
    id: 3,
    title: 'Budget App',
    desc: "Budget App is an application that One can create categories for all their transaction, view total cost of all categories, view the cost of one transaction." ,
    tecnologies: {
      tech1: 'Ruby',
      tech2: 'Ruby on Rails',
      tech3: 'Css',
    },
    live: 'https://ror-capstone-project.onrender.com/',
    source: 'https://github.com/Talha-Hanif5666/Budget-App',
    img: './Images/budget-app.png',
  },
  {
    id: 4,
    title: 'Awesome books Project',
    desc: "Awesome books Project is about creating a library of books. where a user can add a book title and author or delete it." ,
    tecnologies: {
      tech1: 'html',
      tech2: 'React',
      tech3: 'JavaScript',
    },
    live: 'https://talha-hanif5666.github.io/Awesomebooks-new/',
    source: 'https://github.com/Talha-Hanif5666/Awesomebooks-new',
    img: './Images/Todo.PNG',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desktop-popup.png',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desktop-popup.png',
  }
];

// Applying HTML for desktop cards
worksectiondesk.innerHTML = `
<div class="featured-desk">
<div class="img"> </div>
<div class="img-deskt"><img src="./Images/desk-img.png" id="img-deskt" alt=""> </div>
<div class="block">
    <div class="multi"> Multi-Post Stories </div>
    <div class="sup">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</div>
</div>
<ul class="textblock-tags">
  <li>css</li>
  <li>html</li>
  <li>bootstrap</li>
  <li>Ruby</li>
</ul>
<a href="#main-id"><button class="smallbutton" id="project" type="submit" value="submit">See Project</button></a>
</div>
<div class="frame-desk" id="framedesk">
  <div class="content-defaults-desk content1-desk">
    <a href="#">
      <button class="bigbutton deskbutton" type="button">See Project</button>
    </a>
  </div>
  <div class="content-defaults-desk content2-desk">
    <a href="#">
      <button class="bigbutton deskbutton">See Project</button>
    </a>
  </div>
  <div class="content-defaults-desk content3-desk">
    <a href="#">
      <button class="bigbutton deskbutton">See Project</button>
    </a>
  </div>
  <div class="content-defaults-desk content4-desk">
    <a href="#">
      <button class="bigbutton deskbutton">See Project</button>
    </a>
  </div>
  <div class="content-defaults-desk content5-desk">
    <a href="#">
      <button class="bigbutton deskbutton">See Project</button>
    </a>
  </div>
  <div class="content-defaults-desk content6-desk">
    <a href="#">
      <button class="bigbutton deskbutton">See Project</button>
    </a>
  </div>
</div>
`;

// Create generic card section for desktop
const deskworkdetailsSection = (content) => `
<div class="container-popup-desk">
  <div class="pop-up-header-desk">
    <h2>${deskcardDetails[content].title}</h2>
    <span class="close-desk" id="close-desk-${content}">&times;</span>
  </div>
  <div>
    <ul class="pop-up-tags-desk">
      <li>${deskcardDetails[content].tecnologies.tech1}</li>
      <li>${deskcardDetails[content].tecnologies.tech2}</li>
      <li>${deskcardDetails[content].tecnologies.tech3}</li>
    </ul>
  </div>
  <div class="desk-popup-img">
    <img src="${deskcardDetails[content].img}" alt="popup-img.png">
  </div>
  <div class="popup-description-desk">
    <p>${deskcardDetails[content].desc}</p>
  </div>
  <div class="popup-buttons-desk">
    <a href="${deskcardDetails[content].live}" class="see-live">See Live <img src="./Images/mob-popup.png"></a>
    <a href="${deskcardDetails[content].source}" class="see-source">See Source <img src="./Images/pop-icon-github.png"></a>
  </div></div>
`;

const deskDetailButtons = document.querySelectorAll('.deskbutton');

// Create pop-up section for desktop
deskDetailButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the default link behavior
    let div2 = document.createElement('div');
    div2.classList.add("pop-up-desk");
    div2.setAttribute("id", `popupdesk-${index}`);
    div2.innerHTML = deskworkdetailsSection(index);
    let container = document.querySelector('.deskdiv');
    container.appendChild(div2);
    const deskClose = document.querySelector(`#close-desk-${index}`);
    deskClose.addEventListener('click', () => {
      container.removeChild(div2);
    });
  });
});



  
  //Form Validation
const contactForm = document.querySelector('.bottomform');
const fullName = document.querySelector('.username');
const email = document.querySelector('.email');
const message = document.querySelector('.textarea');
const validation = document.querySelector('.errortext');

contactForm.addEventListener('submit',(event) =>{
  const character = /[A-Z]/;
  const emailValue = email.value;
  if(character.test(emailValue)){
    validation.innerHTML = `Your email shouln't contain block letters!`;
    event.preventDefault();
  }
})

 //Form Validation
 const contactForm1 = document.querySelector('.bottomform1');
 const fullName1 = document.querySelector('.username1');
 const email1 = document.querySelector('.email1');
 const message1 = document.querySelector('.textarea1');
 const validation1 = document.querySelector('.errortext1');
 
 contactForm1.addEventListener('submit',(event) =>{
   const character1 = /[A-Z]/;
   const email1Value = email1.value;
   if(character1.test(email1Value)){
     validation1.innerHTML = `Your email shouln't contain block letters!`;
     event.preventDefault();
   }
 })

  