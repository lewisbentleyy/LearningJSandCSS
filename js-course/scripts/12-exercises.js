const add = () => {
    console.log(2 + 3);
};

const runTwice = (func) => {
    func();
    func();
};

let messages = 2;

runTwice(() => {
    console.log("12b");
});

runTwice(add);

const js12c = () => {
    const buttonElement = document.querySelector(".js-12c");
    setTimeout(() => {
        buttonElement.innerHTML = "Finished!";
    }, 1000);
    buttonElement.innerHTML = "Loading...";
};

let timeoutID;

const addToCart = () => {
    pElement = document.querySelector(".js-12e");
    pElement.innerHTML = "Added";
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        pElement.innerHTML = "";
    }, 2000);
};

const belowZero = () => {
    if (messages < 0) {
        messages = 0;
        return messages;
    }
    return messages;
};

let intervalID;
let isDisplaying;

const changeTitle = () => {
    if (messages===0){
        isDisplaying = false;
    }
    if (isDisplaying) {
        return;
    }

    if (messages === 0) {
        clearInterval(intervalID);
        isDisplaying = false;
        document.title = "App";
        return;
    } else {
        intervalID = setInterval(() => {
            if (document.title === "App") {
                isDisplaying = true;
                document.title = `(${belowZero()}) New messages`;
            } else {
                document.title = `App`;
            }
        }, 1000);
    }
};

changeTitle();
