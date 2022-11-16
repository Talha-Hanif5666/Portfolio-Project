const menu = document.getElementById('menu-');
const button= document.getElementById('menu-icon');
const closebtn = document.getElementById ('closed');

const popupmobile = document.getElementById('popupmobile');
const closepopup= document.getElementById('popupclosemobile');
const popupdesk= document.getElementById('popupdesk');
const buttonpopupdesk= document.getElementById('desk-button');
const closepopupdesk= document.getElementById('close-desk-');

const workid = document.querySelector('#works-');
const worksection = document.querySelector('.frame');





//Applying HTML for mobile cards
worksection.innerHTML = `
<div class="featured">
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
        <a href="#"><button class="other-content-link" id="project" type="submit" value="submit">See Project</button></a>
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
          <a class="other-content-link" id="project" href="#" >See Project</a>
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
          <a class="other-content-link" id="project" href="#" >See Project</a>
        </div>
        </div>
        
        `;

worksection.insertAdjacentHTML=`
<div class="frame-desk" id="framedesk">
        
        <div class="content-defaults-desk content1-desk">
          <button>See Project</button>
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

const details = document.querySelectorAll('#project');

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
    img: 'Images/Img-Placeholder.png',
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
    img: './Images/mob-popup.png',
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
    img: './Images/mob-popup.png',
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
    img: './Images/mob-popup.png',
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
    img: './Images/mob-popup.png',
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
    img: './Images/mob-popup.png',
  },
];

// Create pop up section
const workdetailsSection = (content) => `
<div class="pop-up-header" id="popupclosemobile">
        <span class="close">&times;</span>
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
      <a href="${cardDetails[content].live}" id="see-live">See Live <i class="fa fa-external-link"></i></a>
      <a href="${cardDetails[content].source}" id="see-source"> See Source <i class="fa fa-github"></i></a>  
      </div>
`;

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', () => {
    let div = document.createElement('div');
    div.classList.add = "pop-up-mobile";
    div.setAttribute("id", "popupmobile");
    div.innerHTML = workdetailsSection(i);
    let container =document.querySelector('.main');
    let nextdiv =document.querySelector('.toolbar-desktop');
    container.insertBefore(div, nextdiv);
      }) 
     
  };
  const closedetails = document.querySelector('.close');
  closedetails.onclick= function(){
    div.style.display='none';
  }
