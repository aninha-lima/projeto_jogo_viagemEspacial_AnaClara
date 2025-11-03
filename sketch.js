let meteorosY = [50, 50];
let meteorosX = [200, 100];

let personagemX = 200;

let velocidade = 1;
let imagemFundo;
let imagemNave;
let imagemMeteoro1;
let imagemMeteoro2;

function preload() {
  imagemFundo = loadImage("fundo.svg");
  imagemNave = loadImage("nave1.svg");
  imagemMeteoro1 = loadImage("meteoro1.svg");
  imagemMeteoro2 = loadImage("meteoro2.svg");
}

function setup() {
  createCanvas(400, 400);
}

function atualizaMeteoro(atual) {
  meteorosY[atual] += velocidade;
  if (meteorosY[atual] > 400) {
    meteorosY[atual] = 0;
    meteorosX[atual] = random([100, 200, 300]);
    velocidade += 1;
  }
}

function desenhaFundo() {
  // inimigoX, inimigoAltura
  // background("white");
  imageMode(CENTER);
  image(imagemFundo, 200, 200, 400, 400);
}

function desenhaNave() {
  // fill("black");
  // circle(personagemX, 350, 50);
  image(imagemNave, personagemX, 350, 50, 50);
}

function desenhaMeteoro() {
  //fill("red");
  //circle(inimigoX, inimigoAltura, 50);
  image(imagemMeteoro1, meteorosX[0], meteorosY[0], 50, 50);
  image(imagemMeteoro2, meteorosX[1], meteorosY[1], 50, 50);
}

function temColisao1() {
  // personagemX, 350
  let distancia = dist(meteorosX[0], meteorosY[0], personagemX, 350);
  let colidiu = distancia < 50;
  // true false
  return colidiu;
}

function temColisao2() {
  // personagemX, 350
  let distancia = dist(meteorosX[1], meteorosY[1], personagemX, 350);
  let colidiu = distancia < 50;
  // true false
  return colidiu;
}

function verificaSeTemColisao() {
  let colidiu = temColisao1() || temColisao2();
  if (colidiu) {
    textSize(32);
    fill("white");
    textAlign(CENTER, CENTER);
    text("Game Over", 200, 200);
    console.log("encostou");
    noLoop();
    return;
  }
}

function draw() {
  //repetir do 0 até o 1 inclusive
  for (let meteoro = 0; meteoro < meteorosX.length; meteoro += 1) {
    atualizaMeteoro(meteoro);
  }

  desenhaFundo();
  desenhaNave();
  desenhaMeteoro();
  verificaSeTemColisao();
}

function keyPressed() {
  console.log("tecla pressionada");

  //SE teclapressionada = ESQUERDA
  if (keyCode === LEFT_ARROW) {
    personagemX -= 100;
  }

  if (keyCode === RIGHT_ARROW) {
    personagemX += 100;
  }

  personagemX = constrain(personagemX, 100, 300);
}
