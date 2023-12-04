let score = 0
let propagation = true
let direction = false
scoreboard = document.getElementById("score")
update_scoreboard()

const gray = document.getElementById("gray")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const reset_buton = document.getElementById("reset")
const propagation_buton = document.getElementById("propagation")
const directionBtn = document.getElementById("revert")
const log = document.getElementById("log")

const color_red = "rgb(255, 0, 0)"
const color_yellow = "rgb(255, 255, 0)"
const dark_red = "rgba(255, 0, 0, 0.5)"
const dark_yellow = "rgba(200, 255, 0, 0.5)"

prepare()


function prepare() {
    reset_buton.addEventListener("click", reset)
    propagation_buton.addEventListener("click", flip_propagation)
    directionBtn.addEventListener("click", flip_direction)

    flip_direction(false)
}


function gray_click(event) {
    increase_score(1, "gray") 
    if(!propagation) 
        event.stopPropagation()
}
function red_click(event) {
    increase_score(2, "red") 
    if(!propagation) 
        event.stopPropagation()
}
function yellow_click(event) {
    increase_score(5, "yellow") 
    if(!propagation) 
        event.stopPropagation()
}


function increase_score(n, name="unknown") {
    const msg = "Clicked " + name + " with value " + n
    console.log(msg)
    log_print(msg)
    score += n

    update_scoreboard()
    check_conditions()
}

function update_scoreboard() {
    scoreboard.innerText = "Score: " + score
}


function change_colors(item, background) {
    item.style.backgroundColor = background
}

function check_conditions() {
    if (score > 30) {
        yellow.removeEventListener("click", yellow_click, direction);
        yellow.classList.add('inactive');
        change_colors(yellow,  dark_yellow);
    }
    if (score > 50) {
        red.removeEventListener("click", red_click, direction);
        yellow.classList.add('inactive');
        change_colors(red, dark_red);
    }
}


function flip_propagation() {
    propagation = !propagation
    propagation_buton.innerText = (propagation ? "Stop" : "Start") + " Propagation"
    const msg = "Propagation: " + propagation

    console.log(msg)
    log_print(msg)
}

function flip_direction(print=true) {

    gray.removeEventListener("click", gray_click, direction)
    red.removeEventListener("click", red_click, direction)
    yellow.removeEventListener("click", yellow_click, direction)

    direction = !direction

    gray.addEventListener("click", gray_click, direction)
    red.addEventListener("click", red_click, direction)
    yellow.addEventListener("click", yellow_click, direction)

    if (print) {
        if (directionBtn.innerHTML.includes("Reverse"))
            directionBtn.innerHTML = "Default Direction";
        else if(directionBtn.innerHTML.includes("Default"))
            directionBtn.innerHtml = "Reverse Direction";

        const msg = "Direction changed";
        console.log(msg)
        log_print(msg)
    }

    check_conditions()
}

function log_print(msg) {

    var log = document.getElementById('log');
    var p = document.createElement('p');
    p.innerHTML = msg;
    log.appendChild(p);
}

function reset() {

    score = 0
    update_scoreboard()

    change_colors(red, color_red)
    change_colors(yellow, color_yellow)

    flip_direction(false)

    var log = document.getElementById('log');
    log.innerHTML='';
    prepare()
}