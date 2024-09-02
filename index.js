// Get the home and guest score elements
let homeScoreElement = document.querySelector('.home-score');
let guestScoreElement = document.querySelector('.guest-score');


let homeScore = 0;
let guestScore = 0;


function updateScores() {
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
}

function addPoints(team, points) {
  if (team === 'home') {
    homeScore += points;
  } else if (team === 'guest') {
    guestScore += points;
  }
  updateScores();
}

function minus1Home() { 
    if (homeScore > 0) { 
        homeScore -= 1; 
        updateScores();
    }
}


function minus1Guest() {
    if (guestScore > 0) {
        guestScore -=1;
        updateScores();
    }
}


function resetHome() { homeScore = 0; updateScores(); }
function resetGuest() { guestScore = 0; updateScores(); }

window.homeScore = homeScore