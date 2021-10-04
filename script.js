let order = [];
let clickedOder = [];
let score = 0;




const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//cria ordem aleatoria de cores
let shortOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number[i] + 1);
        }
}

// acende a proxima cor gerada no jogo
let lightColor = (element, number) => {
    number = number * 1200;  
    setTimeout(() => {
    element.classList.add('selected');
    },number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
        });
}

// checa se a ordem dos clicks estao corretas
let checkOrder = () => {
    for(let i in clickedOder){
        if(clickedOder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! iniciando proximo nivel`);
        nextLevel();
    }
        
}

// g(uarda click do usuario

let click = (color) => {
    clickedOder[clickedOder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout( () => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

// retorna a cor
// 0 - verde
// 1 - vermelho 
// 2 - amarelo 
// 3 - azul

let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}
// cria proximo nivel do jogo
let nextLevel = () => {
    score++;
    shortOrder();   
}

// game over
let gameOver = () => {
    alert(`Você perdeu! Pontuação ${score}!\n Clieque em OK para iniciar um novo jogo`);
    order = [];
    clickedOder = [];

    playGame();

}


let playGame = () => {
    alert('Bem vindo ao genesis')
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();