const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timeInterval;
let timerFlag = false;
let clock = [0, 0, 0, 0];


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(currentTime) {
    if (currentTime <= 9) {
        currentTime = "0" + currentTime;
    }
    return currentTime;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    theTimer.innerHTML = leadingZero(clock[0]) + ":" + leadingZero(clock[1]) + ":" + leadingZero(clock[2]);
    clock[3]++;
    clock[0] = Math.floor(clock[3] / 100 / 60);
    clock[1] = Math.floor(clock[3] / 100 - clock[0] * 60);
    clock[2] = Math.floor(clock[3] - clock[1] * 100 - clock[0] * 6000);
}

// Match the text entered with the provided text on the page:
function textCompare() {
    let userInput = testArea.value;
    let givenText = originText.substr(0, userInput.length);

    if (userInput === originText) {
        clearInterval(timeInterval);
        testWrapper.style.borderColor = "#c42946";
    } else {
        if (userInput === givenText) {
            testWrapper.style.borderColor = "#c42946";
        } else {
            testWrapper.style.borderColor = "##c40000";
        }
    }
}

// Start the timer:
function startTimer() {
    let userInputLength = testArea.value.length;
    if (userInputLength === 0 && !timerFlag) {
        timeInterval = setInterval(runTimer, 10);
        timerFlag = true;
    }
}

// Reset everything:
function resetTimer() {
    clearInterval(timeInterval);
    clock = [0,0,0,0];
    timerFlag = false;
    timeInterval = null;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", startTimer, false);
resetButton.addEventListener("click", resetTimer, false);
testArea.addEventListener("keyup", textCompare, false);
