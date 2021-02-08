const dino = document.querySelector(".dino");
let isJumping = false;
deixe a posição = 0;
const background = document.querySelector(".background");

function handleKeyUp(event) {
    if (event.keyCode === 38) {
        if (!isJumping) {
            salto();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (posição > = 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (posição <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    posição - = 20;
                    Dino.estilo.inferior = posição + 'px';
                }
            }, 20);
        } else {
            posição + = 20;
            Dino.estilo.inferior = posição + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    deixe cactusPosition = 1000;
    deixe randomTime = Math.aleatório() * 6000;

    cacto.classList.adicionar('cacto');
    cacto.estilo.esquerda = 1000 + 'px';
    fundo.appendChild(cacto);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            fundo.removeChild(cacto);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //game Over 
            clearInterval(leftInterval);
            documento.corpo.innerHTML =
                '<h1 class = "game-over"> Fim de jogo !!! </h1>' +
                '<h3 class = "creditos"> Créditos </h3>' +
                '<ul class = "links">' +
                '<li> <a href="https://www.freepik.com/vectors/background" target="_Blank"> Imagem do Dinossauro: por pikisuperstar - www.freepik.com </a> </li>' +
                '<li> <a href="https://opengameart.org/content/free-desert-platformer-tileset" target="_Blank"> Imagem do deserto: por pzUH - opengameart.org </a> </ li > ' +
                '</ul>' +
                '<div class = "background-final"> </div>';
        } else {
            cactusPosition - = 10;
            cacto.estilo.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
documento.addEventListener(' keyup ', handleKeyUp);