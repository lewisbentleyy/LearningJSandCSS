let intervalID;
let timerGoing = false;
let lapNumber = 1;

const resetTime = () => {
    document.querySelector(".js-min").innerHTML = "00";
    document.querySelector(".js-sec").innerHTML = "00";
    document.querySelector(".js-millisec").innerHTML = "00";
    document.querySelector(".js-laps").innerHTML = "";
    clearInterval(intervalID);
    if (timerGoing) {
        document.querySelector(".js-start").classList.remove("stop");
        document.querySelector(".js-start").innerHTML = "Start";
        timerGoing = false;
    }
    minute = 0;
    second = 0;
    millisec = 0;
    lapNumber = 1;
    document.querySelector(".js-reset").innerHTML = "Lap";
    document.querySelector(".js-reset").removeEventListener("click", resetTime);
};

const displayingBelowTen = (num) => (num < 10 ? "0" + num : num);

const lap = () => {
    document.querySelector(".js-laps").innerHTML += `
    <div class="lap-container">
        <div class="lap-number">Lap ${lapNumber}</div>
        <p class="lap-text">
            <span class="min js-min">${displayingBelowTen(minute)}</span>:<span
                class="sec js-sec"
                >${displayingBelowTen(second)}</span
            >.<span class="millisec js-millisec">${displayingBelowTen(
                millisec
            )}</span>
        </p>
    </div>
    `;
    lapNumber++;
};

document.querySelector(".js-start").addEventListener("click", () => {
    let startElement = document.querySelector(".js-start");
    if (!timerGoing) {
        timerGoing = true;
        start();
        startElement.innerHTML = "Stop";
        startElement.classList.add("stop");
        lapButton();
    } else {
        timerGoing = false;
        lapButton();
        startElement.innerHTML = "Start";
        startElement.classList.remove("stop");
        clearInterval(intervalID);
    }
});

let resetButton = document.querySelector(".js-reset");

function lapButton() {
    if ((millisec !== 0 || second !== 0 || minute !== 0) && !timerGoing) {
        resetButton.innerHTML = "Reset";
        resetButton.addEventListener("click", resetTime);
        resetButton.removeEventListener("click", lap);
    } else if ((millisec !== 0 || second !== 0 || minute !== 0) && timerGoing) {
        resetButton.removeEventListener("click", resetTime);
        resetButton.innerHTML = "Lap";
    }
}

let minute = 0;
let second = 0;
let millisec = 0;

function start() {
    resetButton.addEventListener("click", lap);
    intervalID = setInterval(() => {
        millisec++;
        if (millisec < 10) {
            document.querySelector(".js-millisec").innerHTML = `0${millisec}`;
        } else if (millisec < 100) {
            document.querySelector(".js-millisec").innerHTML = millisec;
        } else {
            millisec = 0;
            second++;
            document.querySelector(".js-millisec").innerHTML = "00";
            if (second < 10) {
                document.querySelector(".js-sec").innerHTML = `0${second}`;
            } else if (second < 60) {
                document.querySelector(".js-sec").innerHTML = `${second}`;
            } else {
                second = 0;
                minute++;
                document.querySelector(".js-sec").innerHTML = `0${second}`;
                if (minute < 10) {
                    document.querySelector(".js-min").innerHTML = `0${minute}`;
                } else if (second < 60) {
                    document.querySelector(".js-min").innerHTML = `${minute}`;
                }
            }
        }
    }, 10);
}
