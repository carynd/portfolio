/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
  
  const sentences = [  "Java Backend Engineer.",  "Software Engineer."];

const textElement = document.querySelector('.text');
let sentenceIndex = 0;
let letterIndex = 0;

function typeSentence() {
  if (letterIndex < sentences[sentenceIndex].length) {
    textElement.textContent += sentences[sentenceIndex][letterIndex];
    letterIndex++;
    setTimeout(typeSentence, 50);
  } else {
    setTimeout(eraseSentence, 2000);
  }
}

function eraseSentence() {
  if (letterIndex > 0) {
    textElement.textContent = sentences[sentenceIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(eraseSentence, 30);
  } else {
    sentenceIndex++;
    if (sentenceIndex >= sentences.length) {
      sentenceIndex = 0;
    }
    setTimeout(typeSentence, 500);
  }
}

typeSentence();
const myButton = document.getElementById("nav-link");
let clicked = false;

myButton.addEventListener("click", () => {
  if (!clicked) {
    myButton.style.backgroundColor = "pink";
    clicked = true;
  } else {
    myButton.style.backgroundColor = "white";
    clicked = false;
  }
});
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  });
});
$(document).ready(function() {
  $('#download-button').click(function() {
      $.ajax({
          url: 'https://main--caryn-resume.netlify.app/Resume.jpg',
          success: function(response) {
              $('#content').html(response);
          }
      });
  });
});