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
<a href="#main-id"><button class="smallbutton" id="deskbutton" type="submit" value="submit">See Project</button></a>
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
        <a href="https://talha-hanif5666.github.io/Todo-list-new/dist/">
        <button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content2-desk">
              <a href="https://talha-hanif5666.github.io/Final-project/">
              <button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content3-desk">
        <a href="https://talha-hanif5666.github.io/Final-project/">
        <button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content4-desk">
        <a href="https://talha-hanif5666.github.io/Final-project/">
              <button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content5-desk">
        <a href="https://talha-hanif5666.github.io/Final-project/">
        <button class="bigbutton" id="deskbutton">See Project</button></a>
        </div>

        <div class="content-defaults-desk content6-desk">
        <a href="https://talha-hanif5666.github.io/Final-project/">
        <button class="bigbutton" id="deskbutton">See Project</button></a>
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
    title: 'Profesional Art Printing Data ',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desk1pop.png',
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
    img: './Images/desk2pop.png',
  },
  {
    id: 2,
    title: 'Hospital Data Website',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desk3pop.png',
  },
  {
    id: 3,
    title: 'Badminton Game Trick Shots',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desk4pop.png',
  },
  {
    id: 4,
    title: 'Cricket Score Check',
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
    title: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/popdesk-bot-back.png',
  },
  {
    id: 6,
    title: 'Website Protfolio Project ',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: '2d https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/desk1pop.png',
  },
  {
    id: 7,
    title: 'Mobile Portfolio Project',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tecnologies: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    live: 'https://talha-hanif5666.github.io/',
    source: 'https://talha-hanif5666.github.io/',
    img: './Images/Work-img1.png',
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
    let container =document.querySelector('.popmobdiv');
    container.appendChild(div);
    const closedetails = document.querySelector('.mobileclose');
     closedetails.addEventListener('click', async =>{
     container.removeChild(div);
    
      }) 
  })};

// Create caard section for desktop
  const deskcardDetails = [
    {
      id: 0,
      title: 'Cricket Data And Knowledge',
      desc: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter ",
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
    let container =document.querySelector('.deskdiv');
    container.appendChild(div2);
    const deskclose =document.querySelector('.close-desk');
    deskclose.addEventListener('click', async =>{
      container.removeChild(div2);
  })
      }) 
     
  };
  
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

  