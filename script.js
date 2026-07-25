const gradDate = new Date("2027-05-29"); //check if correct date + time of ceremony??

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = gradDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft <= 0) {
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
    }
}

setInterval(updateCountdown, 1000);

function createStars() {
  const starsContainer = document.getElementById('stars');
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.setProperty('--rotation', Math.random() * 360 + 'deg');

    const size = Math.random() * 10 + 1; 
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
    star.style.animationDelay = Math.random() * 5 + 's';

    starsContainer.appendChild(star);
  }
}

createStars();



function createComets() {
  const cometsContainer = document.getElementById('comets');
  const comet = document.createElement('div');
  comet.className = 'comet';
  const cometCount = 10;

comet.style.top = Math.random() * 40 + 'vh';
comet.style.left = Math.random() * 80 + 10 + 'vw';

const duration = Math.random() * 1.5 + 0.5; 
comet.style.animationDuration = duration + 's';

cometsContainer.appendChild(comet);
setTimeout(() => {
    comet.remove();
}, duration * 1000);
}


function cometTime(){
    const delay = Math.random() * 4000 + 3000;
    setTimeout(() => {
        createComets();
        cometTime();
    }, delay);
}

cometTime();



function createAliens() {
    const pics = [
        "images/download-removebg-preview.png", //cat
        "images/download__2_-removebg-preview.png", //dog
        "images/download__1_-removebg-preview.png" //meowl
    ];

    const alienPic = pics[Math.floor(Math.random() * 3)];
    const photo = document.createElement('img');
    photo.src = alienPic;

    photo.style.transform = 'scale(0.15)';

    document.body.appendChild(photo);

    
}

const alienButton = document.getElementById('alien-button');
alienButton.addEventListener('click', createAliens);
