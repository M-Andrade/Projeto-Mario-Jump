const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const star = document.querySelector('.star');

const elemento = document.getElementById("id-pipe");
const points = document.getElementById("pontos");
const telaLargura = window.innerWidth;

let time = 1500;
let valorAtual = 00000;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
        valorAtual += 3;
    },500);
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
        clearInterval(loopTime);
        clearInterval(loopPoints);
    }
}, 10)

const loopTime = setInterval(() => {
    time -= 25;
    if(time <= 600){
        time = 600
    }
}, 1000)

const loopPoints = setInterval(() => {
    valorAtual += 1;
    points.innerHTML = valorAtual;
}, 500)

function atingiuBordaDireita() {
    return (elemento.offsetLeft + elemento.offsetWidth) >= telaLargura;
}
  
const cano = document.querySelector('#id-pipe');
pipe.classList.add('pipe-animation');

cano.addEventListener('animationend', () => {
    pipe.classList.remove('pipe-animation');
    setTimeout(() => {
        pipe.classList.add('pipe-animation');
        pipe.style.setProperty('animation-duration', `${time}ms`);
        console.log(time)
    }, 1)
});

const meuBotao = document.getElementById("btn-star");

meuBotao.addEventListener("click", function() {
    location.reload();
});

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);