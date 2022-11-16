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
        <div class="proj" id="project"><a href="#" id="project">
          <img src="./Images/Seeproj.png" alt="proj.png"></a></div>
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
        </div>
        
        `;
//Applying HTML for desktop cards
worksectiondesk.innerHTML=`
<div class="frame-desk" id="framedesk">
        
        <div class="content-defaults-desk content1-desk">
        <a href="#"><button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content2-desk">
          <h2 class="other-content-title">Data Dashboard <br> Healthcare</h2>
          <p class="other-content-description">A daily selection of privately
            personalized reads; no accounts or sign-ups required. has been 
            the industry's standard</p>
            <ul class="other-content-tags">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
        </div>

        <div class="content-defaults-desk content3-desk">
          <h2 class="other-content-title"> <br> Website Protfolio</h2>
          <p class="other-content-description">A daily selection of privately
            personalized reads; no accounts or sign-ups required. has been 
            the industry's standard</p>
            <ul class="other-content-tags">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
        </div>

        <div class="content-defaults-desk content4-desk">
          <h2 class="other-content-title"> <br> Profesional Art <br> Printing Data More</h2>
          <p class="other-content-description">A daily selection of privately
            personalized reads; no accounts or sign-ups required. has been 
            the industry's standard</p>
            <ul class="other-content-tags">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
        </div>

        <div class="content-defaults-desk content5-desk">
          <h2 class="other-content-title"> <br> Data Dashboard <br>Healthcare</h2>
          <p class="other-content-description">A daily selection of privately
            personalized reads; no accounts or sign-ups required. has been 
            the industry's standard</p>
            <ul class="other-content-tags">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
        </div>

        <div class="content-defaults-desk content6-desk">
          <h2 class="other-content-title"> <br> Data Dashboard <br>Healthcare</h2>
          <p class="other-content-description">A daily selection of privately
            personalized reads; no accounts or sign-ups required. has been 
            the industry's standard</p>
            <ul class="other-content-tags">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
        </div>
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
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
  {
    id: 1,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
    tecnologies: {
      tech1: 'htmlee',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
  {
    id: 2,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
  {
    id: 3,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Mobile-popup.png',
  },
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
// Create pop up section for mobile
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', () => {
    let div = document.createElement('div');
    div.classList.add = "pop-up-mobile";
    div.setAttribute("id", "popupmobile");
    div.innerHTML = workdetailsSection(i);
    let container =document.querySelector('.main');
    let nextdiv =document.querySelector('.toolbar-desktop');
    container.insertBefore(div, nextdiv);
    let mobclose = document.querySelector('.mobileclose');
    mobclose.onclick = function() {
    div.style.display="none"
  }
      }) 
     
  };

// Create caard section for desktop
  const deskcardDetails = [
    {
      id: 0,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
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
      id: 1,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard" ,
      tecnologies: {
        tech1: 'htmlee',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://talha-hanif5666.github.io/',
      source: 'https://talha-hanif5666.github.io/',
      img: './Images/desktop-popup.png',
    },
    {
      id: 2,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
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
      id: 3,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
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
      id: 4,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
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
      id: 5,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://talha-hanif5666.github.io/',
      source: 'https://talha-hanif5666.github.io/',
      img: './Images/desktop-popup.png',
    },
  ];
// Create generic card section for desktop
  const deskworkdetailsSection = (content) => `

  <div class="pop-up-header-desk">
          <h2>${deskcardDetails[content].title}</h2>
          <span class="close-desk" id="close-desk-">&times;</span>
        </div>
        <div>
          <ul class="pop-up-tags-desk">
            <li>${deskcardDetails[content].tecnologies.tech1}</li>
            <li>${deskcardDetails[content].tecnologies.tech1}</li>
            <li>${deskcardDetails[content].tecnologies.tech1}</li>
          </ul>
        </div>
        <div class="desk-popup-img">
        <img src="${deskcardDetails[content].img}" alt="popup-img.png">
        </div>
        <div class="popup-description-desk">
          <p>${deskcardDetails[content].desc}</p>
        </div>
        <div class="popup-buttons-desk">
        <a href="${deskcardDetails[content].live}" id="see-live-desk" class="see-live">See Live <img src="./Images/mob-popup.png"></a>
        <a href="${deskcardDetails[content].source}" id="see-source-desk" class="see-source"> See Source <img src="./Images/pop-icon-github.png"></a>
        </div>
`;

const detail = document.querySelectorAll('#deskbutton');
// Create pop up section for desktop
for (let i = 0; i < detail.length; i++) {
  detail[i].addEventListener('click', () => {
    let div2 = document.createElement('div');
    div2.classList.add = "pop-up-desk";
    div2.setAttribute("id", "popupdesk");
    div2.innerHTML = deskworkdetailsSection(i);
    let container =document.querySelector('.main');
    let nextdiv =document.querySelector('.deskdiv');
    container.insertBefore(div2, nextdiv);
    let deskclose =document.querySelector('.close-desk');
    deskclose.onclick = function() {
    div2.style.display="none"
  }
      }) 
     
  };
  
