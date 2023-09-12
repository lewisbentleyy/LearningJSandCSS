let intervalID;

document.querySelector(".js-reset").addEventListener("click", () => {
    document.querySelector(".js-min").innerHTML = "00";
    document.querySelector(".js-sec").innerHTML = "00";
    document.querySelector(".js-millisec").innerHTML = "00";
    clearInterval(intervalID);
    let minute = 0;
    let second = 0;
    let millisec = 0;
});

document.querySelector(".js-start").addEventListener("click", () => {
    start();

});

let minute = 0;
let second = 0;
let millisec = 0;

function start() {
    intervalID = setInterval(() => {
        millisec++;
        if (millisec < 10) {
            document.querySelector(".js-millisec").innerHTML = `0${millisec}`;
        } else if (millisec < 100) {
            document.querySelector(".js-millisec").innerHTML = millisec;
        } else{
            millisec = 0;
            second++;
            document.querySelector(".js-millisec").innerHTML = '00';
            if (second < 10){
                document.querySelector(".js-sec").innerHTML =`0${second}`;
            } else if (second < 60){
                document.querySelector(".js-sec").innerHTML =`${second}`;
            } else {
                second = 0;
                minute++;
                document.querySelector(".js-sec").innerHTML =`0${second}`;
                if (minute < 10){
                    document.querySelector(".js-min").innerHTML =`0${minute}`;
                } else if (second < 60){
                    document.querySelector(".js-min").innerHTML =`${minute}`;
                }
            }
        }
    }, 10);
}
