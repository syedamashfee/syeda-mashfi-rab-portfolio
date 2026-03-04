let bird = document.getElementById('bird');
let pipe = document.getElementById('pipe');
let gravity = 2;
let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
let isGameOver = false;

document.addEventListener('keydown', function (event) {
    if (event.key === " ") {
        jump();
    }
});

function jump() {
    if (birdTop > 0) {
        birdTop -= 40;
        bird.style.top = birdTop + "px";
    }
}

let gameLoop = setInterval(function () {
    birdTop += gravity;
    bird.style.top = birdTop + "px";

    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("right"));

    if (pipeLeft >= 230 && pipeLeft <= 270 && birdTop >= 150) {
        alert("Game Over!");
        clearInterval(gameLoop);
        isGameOver = true;
    }
    
    if (birdTop > 470) {
        alert("Game Over!");
        clearInterval(gameLoop);
        isGameOver = true;
    }
}, 20);
