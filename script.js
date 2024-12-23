const timerEl = document.getElementById('timer');
const ratEl = document.getElementById('rat');

let timeLeft = 600; // 10 minutes in seconds

// Met à jour le compte à rebours toutes les secondes

con
const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    
    timeLeft--;
    c

    timeLeft--
const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerEl.
    time

 
textContent = `${minutes}:${seconds}`;
  } 
 
else {
    
    clearInterv

    clearI

    
clearInterval(countdown);
    timerEl.
    timerE

    ti

 
textContent = "BOOM!";
  }
}, 
  }
},

  }
1000);

// Animation du déplacement aléatoire
function moveRat() {
  
  co
const containerWidth = 1920;
  
  cons

  
const containerHeight = 1080;

  

  co


 
const ratWidth = ratEl.offsetWidth;
  const ratHeight = ratEl.offsetHeight;

  const randomX = Math.random() * (containerWidth - ratWidth);
  const randomY = Math.random() * (containerHeight - ratHeight);

  ratEl.

  rat
style.transform = `translate(${randomX}px, ${randomY}px)`;
}


}
// Déplace le rat toutes les 2 secondes

setInterv

setIn

s
setInterval(moveRat, 2000);
