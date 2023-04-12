const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const star = document.querySelector('.star');

const elemento = document.getElementById("id-pipe");
const points = document.getElementById("pontos");
const telaLargura = window.innerWidth;
let morto = true;


function playJump() {
    var audio = document.getElementById("mario-jump");
    audio.volume = 0.15;
    audio.currentTime = 0;
    audio.play();
}

function playDied() {
    var audio = document.getElementById("mario-died");
    audio.volume = 0.25;
    audio.currentTime = 0;
    audio.play();
}

let time = 1500;
let valorAtual = 00000;

const jump = () => {
    if(morto){
        mario.classList.add('jump');
        playJump()

        setTimeout(() => {
            mario.classList.remove('jump')
            valorAtual += 3;
        },500);
    }else{
        location.reload();
        morto = true;
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 &&pipePosition > 0 && marioPosition < 80) {

        if(morto){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            mario.classList.add('mario-died-anim')
            mario.style.bottom = `-250px`;

            mario.src = 'images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            gameOver.style.display = 'block';


            playDied()
            clearInterval(loop);
            clearInterval(loopTime);
            clearInterval(loopPoints);
            setTimeout(() => {

                star.style.display = 'block';

            },1500);
            morto = false;
        }
    }
}, 10)

const loopTime = setInterval(() => {
    time -= 25;
    if(time <= 450){
        time = 450
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
    }, 1)
});

const meuBotao = document.getElementById("btn-star");

meuBotao.addEventListener("click", function() {
    location.reload();
    morto = true;
});

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);