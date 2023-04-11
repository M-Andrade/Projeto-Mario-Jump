const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const star = document.querySelector('.star');
let time = 1500;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 &&pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.style.display = 'block';

        star.style.display = 'block',

        clearInterval(loop);
    } /*else{ 
        setTimeout(() => {
            time -= 5;
            console.log(`Valor atual: ${time}`);
            pipe.style.animation = 'pipe-animation '+time+'ms infinite linear';
        }, 1000)
    }*/
}, 10)

const meuBotao = document.getElementById("btn-star");

meuBotao.addEventListener("click", function() {
    location.reload();
});

document.addEventListener('keydown', jump);