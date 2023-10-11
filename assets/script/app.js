const subtractButton = document.querySelector("[data-value-subtract]");
const displayNumber = document.querySelector("[data-value-display]");
const addButton = document.querySelector("[data-value-add]");
const autoButton = document.querySelector("[data-value-auto]");
const cancButton = document.querySelector("[data-value-canc]");
const alertt = document.querySelector("[data-value-alert]");

subtractButton.textContent = "-";
addButton.textContent = "+";
displayNumber.textContent = "0";
autoButton.textContent = "AUTO";
cancButton.textContent = "RESET";

class Counter {
    constructor(){
        this.contatore = 0;
        this.autoRunning = false;
        this.interval = null;
    }

    subtract(){
        if(window.innerWidth > 850 && this.contatore == -999999) {
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore == -999999){
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 501 && this.contatore == -999){
            displayNumber.textContent = "Stop!";
        }else{
            if(this.autoRunning == false){
                this.contatore--;
                displayNumber.textContent = this.contatore;
            }else{
                setTimeout(() => {
                    alertt.style.display = "block";
                    setTimeout(() => {
                        alertt.style.display = "none";
                    }, 1000);
                }, 0);
                return;
            }
        }
    }

    add(){
        if(window.innerWidth > 850 && this.contatore > 9999998) {
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore > 999998){
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 500 && this.contatore > 998){
            displayNumber.textContent = "Stop!";
        }else{
            if(this.autoRunning == false) {
                this.contatore++;
                displayNumber.textContent = this.contatore;
            }else{
                setTimeout(() => {
                    alertt.style.display = "block";
                    setTimeout(() => {
                        alertt.style.display = "none";
                    }, 1000);
                }, 0);
                return;
            }
        }
    }

    auto(){
        if(this.autoRunning == false){
            this.interval = setInterval( () => {
                if(window.innerWidth > 850 && this.contatore > 9999998) {
                    displayNumber.textContent = "Stop!";
                }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore > 999998){
                    displayNumber.textContent = "Stop!";
                }else if(window.innerWidth < 500 && this.contatore > 998){
                    displayNumber.textContent = "Stop!";
                }else{
                    this.contatore++;
                    displayNumber.textContent = this.contatore;
                }
            }, 1000);
            autoButton.textContent = "STOP";
            this.autoRunning = true;
        } else {
            this.interval = clearInterval(this.interval);
            autoButton.textContent = "AUTO";
            this.autoRunning = false;
        }
    }

    canc(){
        clearInterval(this.interval);
        this.contatore = 0;
        displayNumber.textContent = 0;
    }

}

let counter = new Counter();

subtractButton.addEventListener("click", () => {
    counter.subtract();
});

addButton.addEventListener("click", () => {
    counter.add();
});

autoButton.addEventListener("click", () => {
    counter.auto();
});

cancButton.addEventListener("click", () => {
    counter.canc();
    autoButton.textContent = "AUTO";
    counter.autoRunning = false;
})

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp"){
        counter.add();
    }else if(e.key == "ArrowDown"){
        counter.subtract();
    }else if(e.key == "a" || e.key == "A"){
        counter.auto();
    }else if (e.key == "r" || e.key == "R"){
        counter.canc();
    }else{
        return;
    }
})
