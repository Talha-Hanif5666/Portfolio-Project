// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");
const profilePic = document.querySelector(".profile-pic");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  profilePic.classList.toggle("hide-profile");
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove("active");
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const gridItems = document.getElementById("grid");

  // Create a new object
  const mainCardDetails = {
    title: "Maths Magician App",
    desc: "Math Magician is a Single Page App(SPA) that I created using React. It depicts how to use react components and state to make a simple calculator. I used the Apple's design of calculator to make the layout of the page.",
    languages: ["JavaScript", "NodeJS", "Css", "ReactJS"],
    live: "https://talhahanif-maths.onrender.com/",
    source: "https://github.com/Talha-Hanif5666/Maths-Magician",
    img: "./Images/math.png",
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 0,
      title: 'Todo List Project',
      desc: "This is a minimal to-do list used to organize your daily schedule. The system also helps to mark and unmark the completion progress of your daily tasks. It is done for educational purposes.",
      languages: ["HTML", "CSS", "JavaScript"],
      live: 'https://talha-hanif5666.github.io/Todo-list-new/dist/',
      source: 'https://github.com/Talha-Hanif5666/Todo-list-new',
      img: './Images/toodolist.png',
    },
    {
      id: 1,
      title: 'Web Development Global Summit',
      desc: "Web Development Course is my HTML, CSS, and JS capstone project. It is about a web development course where people can visit the site to learn more about it and invite others." ,
      languages: ["HTML", "CSS", "JavaScript"],
      live: 'https://talha-hanif5666.github.io/Final-project/',
      source: 'https://github.com/Talha-Hanif5666/Final-project',
      img: './Images/web-summit.png',
    },
    {
      id: 2,
      title: 'RENTCAR Web App',
      desc: "RENTCAR is a collaborative project, it's about luxury car rental platform built with Rails and React. Users can browse and reserve available models, manage reservations, and contribute by adding or deleting cars. It offers a seamless experience for renting luxury cars with ease." ,
      languages: ["Ruby On Rails", "PostgreSql", "React JS"],
      live: 'https://capstone-rails.onrender.com/login',
      source: 'https://github.com/Talha-Hanif5666/capstone-rails',
      img: './Images/Rent-car.png',
    },
    {
      id: 3,
      title: 'Budget App',
      desc: "Budget App is an application that One can create categories for all their transaction, view total cost of all categories, view the cost of one transaction." ,
      languages: ["Ruby On Rails", "PostgreSql", "React JS"],
      live: 'https://ror-capstone-project.onrender.com/',
      source: 'https://github.com/Talha-Hanif5666/Budget-App',
      img: './Images/budget-app.png',
    },
    {
      id: 4,
      title: 'Awesome books Project',
      desc: "Awesome books Project is about creating a library of books. where a user can add a book title and author or delete it." ,
      languages: ["HTML", "React JS", "JavaScript"],
      live: 'https://talha-hanif5666.github.io/Awesomebooks-new/',
      source: 'https://github.com/Talha-Hanif5666/Awesomebooks-new',
      img: './Images/Todo.PNG',
    }
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join("");
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  mainModal = () => {
    let modalDetails = "";
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join("")}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./Images/Icon-Export.svg'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./Images/Icon-GitHub.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("")}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${
  data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./Images/Icon-Export.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${
  data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./Images/Icon-GitHub.svg'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  new Typed(".auto-change", {
    strings: [
      "Full-Stack Web Developer",
      "Front-end Developer",
      "React Native Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  e.preventDefault();
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const emailValue = email.value;
  const nameValue = fullName.value;
  const messageValue = message.value;

  const showAlert = (message) => {
    alert.classList.add("show-alert");
    if (message === "Message sent successfully!") {
      alert.innerHTML = `<span> <ion-icon name="checkmark" class="alert-icon"></ion-icon> </span> ${message}`;
    } else {
      alert.innerHTML = `<span> <ion-icon name="close-circle" class="alert-icon"></ion-icon> </span> ${message}`;
    }
    setTimeout(() => {
      alert.classList.remove("show-alert");
      alert.classList.remove("alert-success");
    }, 2500);
  };

  if (!nameValue || !emailValue || !messageValue) {
    showAlert("Please enter all required fields");
    return;
  }

  if (emailValue !== emailValue.toLowerCase()) {
    showAlert("Please enter lowercase letters.");
    return;
  }

  if (!regex.test(emailValue)) {
    showAlert("Invalid email address!");
    return;
  }

// Select all the sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to the window that listens for a scroll event
document.addEventListener("scroll", () => {
  // Get the current position of the window
  const currentPosition = window.scrollY + 80;
  // Loop through all the sections
  sections.forEach((section) => {
    // Check if the current position is within the section
    if (
      section.offsetTop <= currentPosition
      && section.offsetTop + section.offsetHeight > currentPosition
    ) {
      // Loop through all the nav links
      navLinks.forEach((link) => {
        // Remove the active class from all the nav links
        link.classList.remove("nav-active");
        // Check if the section id is the same as the nav link href
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          // Add the active class to the nav link
          link.classList.add("nav-active");
        }
      });
    }
  });
  })};