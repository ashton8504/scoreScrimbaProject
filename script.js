const homeScore = document.querySelector("#home-score");
const homeButtons = document.querySelector(".homeButtons").querySelectorAll("button");
const guestScore = document.querySelector("#away-score");
const guestButtons = document.querySelector(".guestButtons").querySelectorAll("button");
const resetButton = document.querySelector(".resetButtonContainer .resetButton");

// Section to keep track of home score
let scoreHome = 0;

homeScore.innerHTML = scoreHome;

homeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("button1")) {
            scoreHome += 1;
        } else if (button.classList.contains("button2")){
            scoreHome += 2;
        } else if (button.classList.contains("button3")) {
            scoreHome += 3;
        }
        homeScore.innerHTML = scoreHome;
    });
});

// Section to keep track of away score

let scoreAway = 0;

guestScore.innerHTML = scoreAway;

guestButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("button1")) {
            scoreAway += 1;
        } else if (button.classList.contains("button2")) {
            scoreAway += 2;
        } else if (button.classList.contains("button3")) {
            scoreAway += 3;
        }
        guestScore.innerHTML = scoreAway;
    });
});

// reset button

resetButton.addEventListener("click", () => {
    homeScore.textContent = "0";
    guestScore.textContent = "0";
    scoreHome = 0
    scoreAway = 0
});
